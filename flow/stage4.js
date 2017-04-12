import ContentModal from "../components/ContentModal";

export default ({moveToNextStage}) => (
  <div className="animated fadeIn">
    <h1 className="title has-text-centered is-spaced">Hyperpilot Controller In Action</h1>
    <div className="info-and-button columns">
      <div className="column is-2">
        <ContentModal>
          <p>Hyperpilot Controller is different than your cluster manager's resource management as it's top priority</p>
          <p>is to protect the most important workload. In this case, Goddd is the most important workload that the controller</p>
          <p>ensures QoS for. Based on the information of observing from the important workloads, the controller also can</p>
          <p>determine when and how much resources is safe to oversubscribe.</p>
        </ContentModal>
      </div>
    </div>
  </div>
)
