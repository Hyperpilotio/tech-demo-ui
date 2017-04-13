import { ContinueButton } from "../components";
import fetch from "isomorphic-fetch";


export default ({moveToNextStage}) => (
  <div className="animated fadeIn">
    <h1 className="title is-spaced">Start high priority Web App</h1>
    <div className="stage-content">
      <p>Reflects reality today:</p>
      <ul>
        <li>Potentially contentious applications segregated into own clusters</li>
        <li>Application QoS more assured, but Resource Efficiency suffers</li>
      </ul>
    </div>
    <ContinueButton onClick={moveToNextStage}>Run</ContinueButton>
  </div>
)

export const beforeMovingOn = () => fetch("/actions/run_load_controller");
