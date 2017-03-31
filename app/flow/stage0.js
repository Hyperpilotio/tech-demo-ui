import React from "react"
import stylesheet from 'styles/index.scss'

export default ({moveToNextStage}) => (
  <div>
    <section className="hero is-primary is-bold is-fullheight">
      <div className="hero-body animated fadeIn">
        <div className="demo-content">
          <div className="container has-text-centered">
            <h1 className="title">Welcome to Hyperpilot!</h1>
            <h2 className="subtitle">Consectetur commodi molestias optio labore perspiciatis dolor quibusdam.</h2>
            <a className="button is-primary is-inverted is-medium is-outlined" onClick={moveToNextStage}>Start Demo</a>
          </div>
        </div>
      </div>
    </section>
  </div>
);