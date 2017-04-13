import ContentModal from "../components/ContentModal";

export default ({moveToNextStage}) => (
  <div className="animated fadeIn">
    <h1 className="title is-spaced">Hyperpilot Controller In Action</h1>
    <div className="stage-content">
      <p>Hyperpilot Controller is different than your cluster manager's resource management as it's top priority
      is to protect the most important workload. In this case, Goddd is the most important workload that the controller
      ensures QoS for. Based on the information of observing from the important workloads, the controller also can
      determine when and how much resources is safe to oversubscribe.</p>
    </div>
  </div>
)
