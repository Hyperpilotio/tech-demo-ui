import React from "react"
import Head from "next/head"
import classNames from "classnames"
import stylesheet from 'styles/index.scss'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      demoStage: 0
    };
  }

  render() {
    return (
      <div>
        <Head>
          <title>Hyperpilot Demo!!!</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet  }} />
        </Head>
        <section className="hero is-primary is-bold is-fullheight">
          <div className="hero-body">
            <div className={classNames("container", "has-text-centered", {
              animated: this.state.demoStage >= 1,
              slideOutUp: this.state.demoStage >= 1
            })}>
              <h1 className="title">
                Welcome to Hyperpilot!
              </h1>
              <h2 className="subtitle">Amet est alias tempora provident corrupti?</h2>
              <a className={classNames("button", "is-primary", "is-inverted",
                                       "is-medium", "is-outlined", {
                                         animated: this.state.demoStage >= 1,
                                         fadeOut: this.state.demoStage >= 1
                                       })}
                 onClick={() => this.setState({demoStage: 1})}>Start Demo</a>
            </div>
          </div>
        </section>
      </div>
    );
  }

}
