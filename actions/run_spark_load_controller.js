const { exec } = require("child-process-promise");

module.exports = () => (
  exec("/home/app/scripts/run_spark_load_controller.sh")
    .then(res => ({ stdout: res.stdout, stderr: res.stderr }))
);
