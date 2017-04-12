import ContinueButton from "../components/ContinueButton";
import ContentModal from "../components/ContentModal";
import fetch from "isomorphic-fetch";


export default ({moveToNextStage}) => (
  <div className="animated fadeIn">
    <h1 className="title has-text-centered is-spaced">Microservice App Running Only</h1>
    <div className="info-and-button columns">
      <div className="column is-2">
        <ContentModal>
          <p>Currently the cluster is deployed with a microservice (goddd) that has the following components:</p>
          <li><b>GoDDD</b></li>
          <li><b>MongoDB</b></li>
          <li><b>pathfinder</b></li>
          <p>Let us add traffic to the goddd microservice.</p>
        </ContentModal>
      </div>
      <div className="column">
        <ContinueButton onClick={moveToNextStage}>Run microservice traffic</ContinueButton>
      </div>
    </div>
  </div>
)

export const beforeMovingOn = () => fetch("/actions/run_load_controller");
