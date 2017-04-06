const { exec } = require("child-process-promise");

module.exports = ({ returnJson }) => {
  exec("kubectl -n hyperpilot create -f /home/app/load-controller-deployment.json")
    .then(res => Promise.resolve({ stdout: res.stdout, stderr: res.stderr }))
    .then(returnJson);
};
