import { ContinueButton } from "../components";

let Stage = (props) => (
  <section className="hero is-primary is-bold is-fullheight">
    <div className="hero-body animated fadeIn">
      <div className="demo-content">
        <div className="container has-text-centered">
          <h1 className="title">Welcome to HyperPilot Tech Demo!</h1>
          <ContinueButton text="Start Demo" {...props} directlyNextPage />
        </div>
      </div>
    </div>
  </section>
);

Stage.Layout = "div";

export default Stage;
