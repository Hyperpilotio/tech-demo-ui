const fetch = require("node-fetch");
const querystring = require("querystring");

module.exports = ({ parsedUrl }) => (
  fetch("http://locust-master:8089/swarm", {
    method: "POST",
    body: querystring.stringify({
      locust_count: parsedUrl.query.locust_count || 12,
      hatch_rate: parsedUrl.query.hatch_rate || 22,
      stage_id: ""
    }),
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  })
  .then(result => result.json())
);
