const { exec } = require("child-process-promise");

module.exports = () => (
  exec("/home/app/scripts/run_load_controller.sh")
    .then(res => Promise.resolve({ stdout: res.stdout, stderr: res.stderr }))
);
