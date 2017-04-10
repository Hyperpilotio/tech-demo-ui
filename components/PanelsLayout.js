const Panel = ({dashboard = "hyperpilot-demo", panelId}) => (
  <div>
    <iframe src={process.env.NODE_ENV === "production" ?
                 `/grafana/dashboard-solo/db/${dashboard}?panelId=${panelId}` :
                 `http://play.grafana.org/dashboard-solo/db/internal-grafana-stats?panelId=${panelId}`} />
  </div>
);


const GoDDDRequestsCount = () => (
  <div>
    <div>
      <span className="tag is-dark is-pulled-left">Throughput</span>
      <span className="tag is-info is-pulled-left">Application QoS</span>
    </div>
    <Panel panelId="3" />
  </div>
);

const GoDDDLatency = () => (
  <div>
    <div>
      <span className="tag is-dark is-pulled-left">Latency</span>
      <span className="tag is-info is-pulled-left">Application QoS</span>
    </div>
    <Panel panelId="1" />
  </div>
);

const SparkJobsFinished = () => (
  <div>
    <div>
      <span className="tag is-dark is-pulled-left">Throughput</span>
      <span className="tag is-info is-pulled-left">Application QoS</span>
    </div>
    <Panel panelId="4" />
  </div>
);

const CpuUtilization = () => (
  <div>
    <div>
      <span className="tag is-info is-pulled-left">Resource Utilization</span>
    </div>
    <Panel panelId="2" />
  </div>
);


export default ({children}) => (
  <div>
    <section className="hero is-primary is-bold is-fullheight">
      <div className="hero-body">
        <div className="container demo-container">
          <div className="tile is-ancestor">
            <div className="tile is-4 is-parent">
              <div className="tile is-child">
                {children}
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child box is-success has-text-centered">
                  <h4 className="subtitle is-4">High Priority Web Application</h4>
                  <GoDDDRequestsCount />
                  <GoDDDLatency />
                </div>
              </div>
              <div className="tile is-vertical is-parent">
                <div className="tile is-child box is-vertical is-danger has-text-centered">
                  <h4 className="subtitle is-4">Low Priority Spark Jobs</h4>
                  <SparkJobsFinished />
                </div>
                <div className="tile is-child box is-vertical is-blurry is-dark has-text-centered">
                  <h4 className="subtitle is-4">Cluster Resources</h4>
                  <CpuUtilization />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)
