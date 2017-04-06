let Panel = ({dashboard = "hyperpilot-demo", panelId}) => (
  <div className="column is-6">
    <iframe src={`/grafana/dashboard-solo/db/${dashboard}?panelId=${panelId}`} />
  </div>
);

export default ({children}) => (
  <div>
    <section className="hero is-primary is-bold is-fullheight">
      <div className="hero-body">
        <div className="container demo-container">
          <div className="columns">
            <div className="column is-4">
              {children}
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
)
