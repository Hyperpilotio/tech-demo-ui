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
        <p>Let us add traffic to the goddd microservice.</p>
      </content>
    </h2>
    <ContinueButton onClick={moveToNextStage}>Run microservice traffic</ContinueButton>
  </div>
)

export const beforeMovingOn = () => (
  fetch("/actions/run_load_controller")
    .then(res => return Promise.resolve(res))
);
