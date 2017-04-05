import React from "react"
import stylesheet from 'styles/index.scss'
import PanelsLayout from "./PanelsLayout"


export default ({moveToNextStage}) => (
  <PanelsLayout>
    <h1 className="title has-text-centered is-spaced">The Impact</h1>
    <h2 className="subtitle">
      <content>
        <div>
          <p>An example app is running on a Kubernetes cluster, there are several services included:</p>
          <li><b>GoDDD</b></li>
          <li><b>MongoDB</b></li>
          <li><b>pathfinder</b></li>
          <li><b>Spark Master</b></li>
          <li><b>Spark Slave</b> (2 of them)</li>
        </div>
      </content>
    </h2>
    <a className="button is-primary is-inverted is-medium is-outlined" onClick={moveToNextStage}>Run Spark</a>
  </PanelsLayout>
);
