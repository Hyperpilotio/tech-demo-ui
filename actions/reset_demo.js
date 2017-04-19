const { exec } = require("child-process-promise");

module.exports = () => {

  let promises = [];

  for (let ns of ["default", "hyperpilot"]) {
    // Delete all pods (will recover automatically)
    promises.push(
      exec(`kubectl get pods -n ${ns} -o json`)
        .then(res => JSON.parse(res.stdout))
        .then(data => data.items
          .filter(pod => pod.metadata.labels.app !== "demo-ui")
          .map(pod => pod.metadata.name)
          .join(" ")
        )
        .then(pods => exec(`kubectl delete pods ${pods} -n ${ns}`))
    );
  }

  for (let deployment of ["load-controller", "spark-load-controller"]) {
    // Delete deployments deployed during the demo
    promises.push(
      exec(`kubectl delete -f /tmp/${deployment}-deployment.json`)
    );
  }

  // Catch errors by "each" Promise
  promises = promises.map(prom => prom.catch(reason => reason));

  return Promise.all(promises)
    .then(values => values.map(res => ({ stdout: res.stdout, stderr: res.stderr })))
    .then(values => ({
      deleteDefaultPods: values[0],
      deleteHyperpilotPods: values[1],
      deleteLoadController: values[2],
      deleteSparkLoadController: values[3]
    }));
}
