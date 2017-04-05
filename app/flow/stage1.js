import React from "react"
import stylesheet from 'styles/index.scss'
import PanelsLayout from "./PanelsLayout"


export default ({moveToNextStage}) => (
  <PanelsLayout>
    <h1 className="title has-text-centered is-spaced">Microservice App Running Only</h1>
    <h2 className="subtitle">
      <content>
        <div>
          <p>Currently the cluster is deployed with a microservice (goddd) that has the following components:</p>
          <li><b>GoDDD</b></li>
          <li><b>MongoDB</b></li>
          <li><b>pathfinder</b></li>
          <p>Let's add traffic to the goddd microservice.</p>
        </div>
      </content>
    </h2>
    <a className="button is-primary is-inverted is-medium is-outlined" onClick={moveToNextStage}>Run microservice traffic</a>
  </PanelsLayout>
);
