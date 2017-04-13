import { ContinueButton, ContentModal } from "../components";
import fetch from "isomorphic-fetch";


export default ({moveToNextStage}) => (
  <div className="animated fadeIn has-text-centered">
    <h1 className="title is-spaced">Microservice App Running Only</h1>
    <div className="info-and-button">
      <ContentModal>
        <p>Currently the cluster is deployed with a microservice (goddd) that has the following components:</p>
        <li><b>GoDDD</b></li>
        <li><b>MongoDB</b></li>
        <li><b>pathfinder</b></li>
        <p>Let us add traffic to the goddd microservice.</p>
      </ContentModal>
      <ContinueButton onClick={moveToNextStage}>Run microservice traffic</ContinueButton>
    </div>
  </div>
)

export const beforeMovingOn = () => fetch("/actions/run_load_controller");
