import ContinueButton from "../components/ContinueButton";
import ContentModal from "../components/ContentModal";
import fetch from "isomorphic-fetch";


export default ({moveToNextStage}) => (
  <div className="animated fadeIn">
    <h1 className="title has-text-centered is-spaced">Traffic running with Microservice</h1>
    <div className="info-and-button columns">
      <div className="column is-2">
        <ContentModal>
          <p>With traffic running through the microservices, we see that CPU utilization remains resonably low.</p>
          <p>As traffic varies, the cluster is provisioned to allow peak and spikes.</p>
          <p>To increase utilization without downsizing the cluster, we can run best effort batch jobs in the same cluster</p>
          <p>Let us run best effort Spark jobs in the cluster.</p>
        </ContentModal>
      </div>
      <div className="column">
        <ContinueButton onClick={moveToNextStage}>Run Spark Jobs</ContinueButton>
      </div>
    </div>
  </div>
)

export const beforeMovingOn = () => fetch("/actions/run_spark_load_controller");
