import { Badge, HealthBadge } from "./Badge";

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
      <Badge className="is-dark">Throughut</Badge>
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


export default ({children}) => (
  <div>
    <section className="hero is-primary is-bold is-fullheight">
      <div className="hero-body">
        <div className="container demo-container">
          <div className="tile is-ancestor is-vertical">
            <div className="tile">
              <div className="tile is-4 is-parent">
                <div className="tile is-child hero-body">
                  {children}
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box is-success has-text-centered">
                  <h4 className="subtitle is-4">High Priority Web Application</h4>
                  <div className="columns">
                    <GoDDDRequestsCount className="column" />
                    <GoDDDLatency className="column" />
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child is-8">
                <div className="chart-group box is-blurry is-dark has-text-centered">
                  <h4 className="subtitle is-4">Cluster Resources</h4>
                  <div className="columns">
                    <CpuUtilization className="box is-warning column" />
                    <Networking className="box is-warning column" />
                  </div>
                </div>
              </div>
              <div className="tile is-child">
                <div className="box is-dark is-inactive has-text-centered">
                  <h4 className="subtitle is-4">Low Priority Spark Jobs</h4>
                  <SparkJobsFinished />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)
