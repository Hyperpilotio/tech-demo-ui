const fetch = require("isomorphic-fetch");

module.exports = () => (
  fetch("http://qos-data-store:7781/v1/switch/on", { method: "POST" })
    .then(res => res.json())
);
