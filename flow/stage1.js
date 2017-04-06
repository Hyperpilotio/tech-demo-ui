import ContinueButton from "../components/ContinueButton";
import fetch from "isomorphic-fetch";


export default ({moveToNextStage}) => (
  <div className="animated fadeIn">
    <h1 className="title has-text-centered is-spaced">Microservice App Running Only</h1>
    <h2 className="subtitle">
      <content>
        <p>Currently the cluster is deployed with a microservice (goddd) that has the following components:</p>
        <li><b>GoDDD</b></li>
        <li><b>MongoDB</b></li>
        <li><b>pathfinder</b></li>
        <p>Let's add traffic to the goddd microservice.</p>
      </content>
    </h2>
    <ContinueButton onClick={moveToNextStage}>Run microservice traffic</ContinueButton>
  </div>
)

export const beforeMovingOn = () => (
  fetch("/actions/run_locust?locust_count=30&hatch_rate=30")
    .then(res => res.json())
    .then(json => {
      if (json.success !== true)
        throw new Error(`Run Locust Unsuccessful, response: ${JSON.stringify(json)}`);
      return Promise.resolve(json);
    })
);
