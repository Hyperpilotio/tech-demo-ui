const { exec } = require("child-process-promise");
const fs = require("fs");

module.exports = ({ parsedUrl, res }) => {
  let deploymentFile = `/tmp/${parsedUrl.query.name}-deployment.json`
  if (!fs.existsSync(deploymentFile)) {
    res.statusCode = 404;
    return Promise.resolve({ error: "Deployment not found" });
  }
  return exec(`kubectl create -f ${deploymentFile} -o json`)
    .then(res => JSON.parse(res.stdout))
}
