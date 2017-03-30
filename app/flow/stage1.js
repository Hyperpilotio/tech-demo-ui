import React from "react"
import stylesheet from 'styles/index.scss'

export default ({moveToNextStage, title, subtitle}) => (
  <div>
    <section className="hero is-primary is-bold is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered animated slideOutUp">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
          <a className="button is-primary is-inverted is-medium is-outlined animated fadeOut" onClick={moveToNextStage}>Start Demo</a>
        </div>
      </div>
    </section>
  </div>
);
