import React from "react"
import stylesheet from 'styles/index.scss'


let Panel = ({dashboard = "hyperpilot-demo", panelId}) => (
  <div className="column is-6">
    <iframe src={`/grafana/dashboard-solo/db/${dashboard}?panelId=${panelId}`} />
  </div>
);


export default ({moveToNextStage}) => (
  <div>
    <section className="hero is-primary is-bold is-fullheight">
      <div className="hero-body animated fadeIn">
        <div className="container demo-container">
          <div className="columns">
            <div className="column is-4">
              <h1 className="title has-text-centered is-spaced">Example Service-Based App</h1>
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
            </div>
            <div className="column is-8">
              <div className="columns">
                <Panel panelId="1" />
                <Panel panelId="2" />
              </div>
              <div className="columns">
                <Panel panelId="3" />
                <Panel panelId="4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
