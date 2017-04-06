import ContinueButton from "../components/ContinueButton";


export default ({moveToNextStage}) => (
  <div className="animated fadeIn">
    <h1 className="title has-text-centered is-spaced">Microservice + Batch jobs running</h1>
    <h2 className="subtitle">
      <content>
        <p>Spark jobs are curently running, using resources that isn't being reserved by the microservice.</p>
        <p>As Spark jobs is making progress, we can see from the graphs that CPU utilization has increased.</p>
        <p>While we are able to run more workloads and increase utilization, we see that the latency and throughput from the Microservice is impacted.</p>
        <p>At this moment, the only choices from an operator is to either kill the batch jobs or try to increase the cluster size (which doesn't solve the problem we see)</p>
        <p>Let's enable the Hyperpilot Controller and see what it can do!</p>
      </content>
    </h2>
    <ContinueButton onClick={moveToNextStage}>Enable Hyperpilot Controller</ContinueButton>
  </div>
)
