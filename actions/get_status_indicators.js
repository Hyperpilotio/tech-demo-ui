const { parse } = require("url");
// const { exec } = require("child-process-promise");
const Influx = require("influx");
const influx = new Influx.InfluxDB({
  host: "influxsrv",
  database: "snap"
});

// const scriptedStatus = () => {
//   exec("kubectl get deploy -o json")
// };

module.exports = ({ req }) => {

  if (process.env.NODE_ENV === "production") {

    return influx.query(`
      SELECT MEAN(value)
      FROM "hyperpilot/goddd/api_booking_service_request_latency_microseconds"
      WHERE summary = 'quantile_50'
      AND time > now() - 1m`)
      .then(results => Promise.resolve({
        app: results[0].mean > 0.01 ? "bad" : "good",
        spark: "none",
        cpu: "warn",
        network: "warn"
      }));

  } else {
    let stage = parse(req.headers.referer, true).query.stage;
    let result;
    if (stage === "1") {
      result = { app: "none", spark: "none", cpu: "none", network: "none" };
    } else if (stage === "2") {
      result = { app: "good", spark: "none", cpu: "warn", network: "warn" };
    } else if (stage === "3") {
      result = { app: "bad", spark: "warn", cpu: "good", network: "bad" };
    } else if (stage === "4") {
      result = { app: "good", spark: "warn", cpu: "good", network: "good" };
    }
    return Promise.resolve(result);
  }

};
