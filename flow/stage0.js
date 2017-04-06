import ContinueButton from "./ContinueButton"

let Stage = ({moveToNextStage}) => (
  <section className="hero is-primary is-bold is-fullheight">
    <div className="hero-body animated fadeIn">
      <div className="demo-content">
        <div className="container has-text-centered">
          <h1 className="title">Welcome to Hyperpilot Tech Demo!</h1>
          <h2 className="subtitle">Demo focusing on mixing workloads</h2>
          <ContinueButton onClick={moveToNextStage}>Start Demo</ContinueButton>
        </div>
      </div>
    </div>
  </section>
);

Stage.Layout = "div";

export default Stage;
