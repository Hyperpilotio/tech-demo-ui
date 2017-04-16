import React from "react";
import { Badge } from "./Badge";
import StatusIndicator from "./StatusIndicator";
import fetch from "isomorphic-fetch";

const Panel = ({dashboard = "hyperpilot-demo", panelId}) => (
  <div>
    <iframe src={process.env.NODE_ENV === "production" ?
                 `/grafana/dashboard-solo/db/${dashboard}?panelId=${panelId}` :
                 `http://play.grafana.org/dashboard-solo/db/internal-grafana-stats?panelId=${panelId}`} />
  </div>
);

const GoDDDRequestsCount = (props) => (
  <div {...props}>
    <div>
      <Badge className="is-dark">Throughput</Badge>
      <Badge className="is-info">Application QoS</Badge>
    </div>
    <Panel panelId="3" />
  </div>
);

const GoDDDLatency = (props) => (
  <div {...props}>
    <div>
      <Badge className="is-dark">Latency</Badge>
      <Badge className="is-info">Application QoS</Badge>
    </div>
    <Panel panelId="1" />
  </div>
);

const SparkJobsFinished = (props) => (
  <div {...props}>
    <div>
      <Badge className="is-dark">Throughput</Badge>
      <Badge className="is-info">Application QoS</Badge>
    </div>
    <Panel panelId="4" />
  </div>
);

const CpuUtilization = (props) => (
  <div {...props}>
    <div>
      <Badge className="is-info">Resource Utilization</Badge>
    </div>
    <Panel panelId="2" />
  </div>
);

// XXX: Just for mockup here
const Networking = (props) => (
  <div {...props}>
    <div>
      <Badge className="is-info">Resource Utilization</Badge>
    </div>
    <Panel panelId="5" />
  </div>
);


export default class PanelsLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      indicator: {
        app: "none",
        spark: "none",
        cpu: "none",
        network: "none"
      }
    };
    this.updateStatusIndicators();
  }

  async updateStatusIndicators() {
    const res = await fetch("/actions/get_status_indicators")
    if (res.ok) {
      const indicator = await res.json();
      this.setState({ indicator });
    }
    setTimeout(::this.updateStatusIndicators, 3000);
  }

  render() {
    return (
      <section className="hero is-primary is-bold is-fullheight">
        <div className="hero-body">
          <div className="container demo-container">
            <div className="tile is-ancestor is-vertical">
              <div className="tile">
                <div className="tile is-4 is-parent">
                  <div className="tile is-child hero-body">
                    {this.props.children}
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child has-text-centered is-paddingless">
                    <StatusIndicator status={this.state.indicator.app}>
                      <h4 className="subtitle is-4">High Priority Web Application</h4>
                      <div className="columns">
                        <GoDDDLatency className="column" />
                        <GoDDDRequestsCount className="column" />
                      </div>
                    </StatusIndicator>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child is-4">
                  <div className="chart-group box is-blurry is-dark has-text-centered">
                    <h4 className="subtitle is-4">Cluster Resources</h4>
                    <div className="columns">
                      <div className="column">
                        <StatusIndicator status={this.state.indicator.cpu}>
                          <CpuUtilization />
                        </StatusIndicator>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="tile is-child has-text-centered is-4">
                  <StatusIndicator status={this.state.indicator.spark}>
                    <h4 className="subtitle is-4">Low Priority Spark Jobs</h4>
                    <SparkJobsFinished />
                  </StatusIndicator>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
