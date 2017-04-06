import ContinueButton from "../components/ContinueButton";
import fetch from "isomorphic-fetch";


export default ({moveToNextStage}) => (
  <div className="animated fadeIn">
    <h1 className="title has-text-centered is-spaced">Traffic running with Microservice</h1>
    <h2 className="subtitle">
      <content>
        <div>
          <p>With traffic running through the microservices, we see that CPU utilization remains resonably low.</p>
          <p>As travel varies, the cluster is provisioned to allow peak and spikes.</p>
          <p>To increase utilization without downsizing the cluster, we can run best effort batch jobs in the same cluster</p>
          <p>Let's run best effort Spark jobs in the cluster.</p>
        </div>
      </content>
    </h2>
    <ContinueButton onClick={moveToNextStage}>Run Spark Jobs</ContinueButton>
  </div>
)

export const beforeMovingOn = () => (
  fetch("/actions/run_spark")
    .then(res => res.json())
    .then(json => {
      if (!("stdout" in json && "stderr" in json))
        throw new Error(`Run Spark Unsuccessful, response: ${JSON.stringify(json)}`);
      return Promise.resolve(json);
    })
);
