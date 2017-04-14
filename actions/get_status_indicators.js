const { parse } = require("url");
const { exec } = require("child-process-promise");
const fetch = require("isomorphic-fetch");
const Influx = require("influx");
const influx = new Influx.InfluxDB({
  host: "influxsrv",
  database: "snap"
});

const scriptedStatus = () => Promise.all([

  exec("kubectl get deployments -n hyperpilot -o json")
    .then(out => JSON.parse(out.stdout))
    .then(data => data.items.reduce(
      ((res, item) => (res[item.metadata.name] = true) && res), {}
    ))
    .then(deploys => ({
      loadController: deploys["load-controller"] === true,
      sparkLoadController: deploys["spark-load-controller"] === true,
    })),

  fetch("http://qos-data-store:7781/v1/switch")
    .then(res => res.json())
    .then(data => ({ qosDataStore: data.data }))

]).then(values => Object.assign({}, ...values)).then(status => {

  if (status.loadController) {
    if (status.sparkLoadController) {
      if (status.qosDataStore) {
        return { app: "good", spark: "warn", cpu: "good", network: "good" };
      } else {
        return { app: "bad", spark: "warn", cpu: "good", network: "bad" };
      }
    } else {
      return { app: "good", spark: "none", cpu: "warn", network: "warn" };
    }
  } else {
    return { app: "none", spark: "none", cpu: "none", network: "none" };
  }

});

module.exports = ({ req }) => {

  if (process.env.NODE_ENV === "production") {

    // return influx.query(`
    //   SELECT MEAN(value)
    //   FROM "hyperpilot/goddd/api_booking_service_request_latency_microseconds"
    //   WHERE summary = 'quantile_50'
    //   AND time > now() - 1m`)
    //   .then(results => Promise.resolve({
    //     app: results[0].mean > 0.01 ? "bad" : "good",
    //     spark: "none",
    //     cpu: "warn",
    //     network: "warn"
    //   }));
    return scriptedStatus();

  } else {
    let res;
    if (req.headers.referer === undefined) {
      res = { app: "none", spark: "none", cpu: "none", network: "none" };
    }
    let stage = parse(req.headers.referer, true).query.stage;
    if (stage === "1") {
      res = { app: "none", spark: "none", cpu: "none", network: "none" };
    } else if (stage === "2") {
      res = { app: "good", spark: "none", cpu: "warn", network: "warn" };
    } else if (stage === "3") {
      res = { app: "bad", spark: "warn", cpu: "good", network: "bad" };
    } else if (stage === "4") {
      res = { app: "good", spark: "warn", cpu: "good", network: "good" };
    }
    return Promise.resolve(res);
  }

};
