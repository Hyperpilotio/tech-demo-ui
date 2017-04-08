const { exec } = require("child-process-promise");

module.exports = () => (
  exec("kubectl create -f /home/app/spark-load-controller-deployment.json")
    .then(res => Promise.resolve({ stdout: res.stdout, stderr: res.stderr }))
);
