const { exec } = require("child-process-promise");

const RUN_SPARK_CMD = `/bin/bash -c './bin/spark-submit --master=spark://$(hostname -i):6066 --deploy-mode=cluster --executor-memory 2g --driver-memory 2g --class MovieLensALS s3://hyperpilot-jarfiles/movielens-als-assembly-2.11-0.1.jar s3://demo-analysis-datasets/movielens/medium/ s3://demo-analysis-datasets/personalRatings.txt'`;

module.exports = ({ returnJson }) => (
  exec("kubectl get pods -n default -o json")
    .then(res => Promise.resolve(JSON.parse(res.stdout)))
    .then(data => {
      for (let pod of data.items) {
        if (pod.metadata.labels.app === "spark-master")
          return Promise.resolve(pod.metadata.name);
      }
    })
    .then(name => exec(`kubectl exec ${name} -n default -- ${RUN_SPARK_CMD}`))
    .then(res => Promise.resolve({
      stdout: res.stdout,
      stderr: res.stderr,
      execSuccess: true
    }))
    .then(returnJson)
);
