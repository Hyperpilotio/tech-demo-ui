const { exec } = require("child-process-promise");

module.exports = ({ returnJson }) => {
  exec("kubectl create -f /home/app/spark-load-controller-deployment.json")
    .then(res => Promise.resolve({ stdout: res.stdout, stderr: res.stderr }))
    .then(returnJson);
};