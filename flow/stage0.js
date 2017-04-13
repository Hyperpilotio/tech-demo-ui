import { ContinueButton } from "../components";

let Stage = ({moveToNextStage}) => (
  <section className="hero is-primary is-bold is-fullheight">
    <div className="hero-body animated fadeIn">
      <div className="demo-content">
        <div className="container has-text-centered">
          <h1 className="title">Welcome to HyperPilot Tech Demo!</h1>
          <ContinueButton onClick={moveToNextStage}>Start Demo</ContinueButton>
        </div>
      </div>
    </div>
  </section>
);

Stage.Layout = "div";

export default Stage;
