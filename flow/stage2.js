import React from "react"
import stylesheet from 'styles/index.scss'
import PanelsLayout from "./PanelsLayout"


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
    <a className="button is-primary is-inverted is-medium is-outlined" onClick={moveToNextStage}>Run Spark Jobs</a>
  </div>
);
