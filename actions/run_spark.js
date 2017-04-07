const { exec } = require("child-process-promise");

const RUN_SPARK_CMD = `/bin/bash -c './bin/spark-submit --master=spark://$(hostname -i):6066 --deploy-mode=cluster --executor-memory 2g --driver-memory 2g --class MovieLensALS s3://hyperpilot-jarfiles/movielens-als-assembly-2.11-0.1.jar s3://demo-analysis-datasets/movielens/medium/ s3://demo-analysis-datasets/personalRatings.txt'`;

module.exports = ({ returnJson }) => {
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
    .catch(reason => Promise.resolve(reason))
    .then(returnJson);
};

// const fs = require("fs");
// const querystring = require("querystring");
// const fetch = require("node-fetch");
// const https = require("https");
// const spdy = require("spdy");

// const { KUBERNETES_SERVICE_HOST, KUBERNETES_PORT_443_TCP_PORT } = process.env;
// const API_ROOT = `https://${KUBERNETES_SERVICE_HOST}:${KUBERNETES_PORT_443_TCP_PORT}`;
// const KUBE_TOKEN = fs.readFileSync("/var/run/secrets/kubernetes.io/serviceaccount/token").asciiSlice();
// const headers = {
//   Authorization: `Bearer ${KUBE_TOKEN}`
// };
// const agent = new https.Agent({ rejectUnauthorized: false });
// const agent = spdy.createAgent({ rejectUnauthorized: false, host: KUBERNETES_SERVICE_HOST, port: KUBERNETES_PORT_443_TCP_PORT });


// module.exports = ({ returnJson }) => {
//   fetch(`${API_ROOT}/api/v1/pods`, { headers, agent })
//     .then(res => res.json())
//     .then(data => {
//       for (let pod of data.items) {
//         if (pod.metadata.labels.app === "spark-master")
//           return Promise.resolve(`${API_ROOT}${pod.metadata.selfLink}`);
//       }
//     })
//     .then(podUrl => {
//       const qs = querystring.stringify({ command: RUN_SPARK_CMD });
//       return fetch(`${podUrl}/exec?${qs}`, {
//         agent,
//         headers: Object.assign({
//           Connection: "Upgrade",
//           Upgrade: "spdy/3.1",
//           "X-Stream-Protocol-Version": ["v2.channel.k8s.io", "channel.k8s.io"]
//         }, headers)
//       });
//     })
//     .then(res => res.json())
//     .then(returnJson)
// };
