const Influx = require("influx");
const influx = new Influx.InfluxDB({
  host: "influxsrv",
  database: "snap"
});

module.exports = () => {

  if (process.env.NODE_ENV === "production") {
    return influx.query(`
      SELECT MEAN(value)
      FROM "hyperpilot/goddd/api_booking_service_request_latency_microseconds"
      WHERE summary = 'quantile_50'
      AND time > now() - 1m`)
      .then(results => Promise.resolve({
        app: results[0].mean > 0.01 ? "bad" : "good",
        spark: "inactive",
        cpu: "warn",
        network: "warn"
      }));
  } else {
    return Promise.resolve({
      app: "good",
      spark: "inactive",
      cpu: "warn",
      network: "warn"
    });
  }

};
