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
      <span className="tag is-dark is-pulled-left">Throughput</span>
      <span className="tag is-info is-pulled-left">Application QoS</span>
      <span className="tag is-success is-outlined is-pulled-right"><i className="fa fa-check"></i></span>
    </div>
    <Panel panelId="3" />
  </div>
);

const GoDDDLatency = (props) => (
  <div {...props}>
    <div>
      <span className="tag is-dark is-pulled-left">Latency</span>
      <span className="tag is-info is-pulled-left">Application QoS</span>
      <span className="tag is-success is-outlined is-pulled-right"><i className="fa fa-check"></i></span>
    </div>
    <Panel panelId="1" />
  </div>
);

const SparkJobsFinished = (props) => (
  <div {...props}>
    <div>
      <span className="tag is-dark is-pulled-left">Throughput</span>
      <span className="tag is-info is-pulled-left">Application QoS</span>
      <span className="tag is-danger is-outlined is-pulled-right"><i className="fa fa-exclamation"></i></span>
    </div>
    <Panel panelId="4" />
  </div>
);

const CpuUtilization = (props) => (
  <div {...props}>
    <div>
      <span className="tag is-info is-pulled-left">Resource Utilization</span>
      <span className="tag is-warning is-outlined is-pulled-right"><i className="fa fa-exclamation"></i></span>
    </div>
    <Panel panelId="2" />
  </div>
);

// XXX: Just for mockup here
const Networking = (props) => (
  <div {...props}>
    <div>
      <span className="tag is-info is-pulled-left">Resource Utilization</span>
      <span className="tag is-success is-outlined is-pulled-right"><i className="fa fa-check"></i></span>
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
                <div className="box is-blurry is-dark has-text-centered">
                  <h4 className="subtitle is-4">Cluster Resources</h4>
                  <div className="columns">
                    <CpuUtilization className="column" />
                    <Networking className="column" />
                  </div>
                </div>
              </div>
              <div className="tile is-child">
                <div className="box is-danger has-text-centered">
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
