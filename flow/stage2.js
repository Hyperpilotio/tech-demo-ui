import { ContinueButton } from "../components";
import fetch from "isomorphic-fetch";


export default (props) => (
  <div className="animated fadeIn">
    <h1 className="title is-spaced">Add lower priority Spark jobs</h1>
    <div className="stage-content">
      <p>As Spark jobs are added to this cluster:</p>
      <ul>
        <li>Resource contention begins to degrade performance for both workloads</li>
        <li>Performance degradation violates SLO of Web App</li>
      </ul>
    </div>
    <ContinueButton text="Run" {...props} />
  </div>
)

export const beforeMovingOn = () => fetch("/actions/create_deployments?name=spark-load-controller");
