import { ContinueButton } from "../components";
import fetch from "isomorphic-fetch";


export default (props) => (
  <div className="animated fadeIn">
    <h1 className="title is-spaced">Turn on HyperPilot</h1>
    <div className="stage-content">
      <p>With HyperPilot (HP):</p>
      <ul>
        <li>HP understands network congestion is bottleneck</li>
        <li>Throttles Spark resources</li>
        <li>Restores Web App QoS</li>
      </ul>
    </div>
    <ContinueButton text="Run" {...props} />
  </div>
)


export const beforeMovingOn = () => fetch("/actions/run_qos_data_store");
