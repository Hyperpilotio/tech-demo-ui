import React from "react"
import Head from "next/head"
import Flow from "../flow"
import classNames from "classnames"
import stylesheet from 'styles/index.scss'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      demoStage: 0
    };
  }

  moveToNextStage() {
    this.setState({demoStage: this.state.demoStage + 1});
  }

  render() {
    const Stage = Flow[this.state.demoStage];
    return (
      <div>
        <Head>
          <title>Hyperpilot Demo!!!</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet  }} />
        </Head>

        <Stage moveToNextStage={::this.moveToNextStage} {...this.state.content} />
      </div>
    );
  }

}
