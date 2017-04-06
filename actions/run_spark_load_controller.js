const { exec } = require("child-process-promise");

module.exports = ({ returnJson }) => {
  exec("kubectl -n hyperpilot create -f /home/app/spark-load-controller-deployment.yaml")
    .then(res => Promise.resolve({ stdout: res.stdout, stderr: res.stderr }))
    .then(returnJson);
};
