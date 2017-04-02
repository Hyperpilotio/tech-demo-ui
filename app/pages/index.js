import React from "react"
import Head from "next/head"
import Router from "next/router"
import Flow from "../flow"
import classNames from "classnames"
import stylesheet from 'styles/index.scss'
import "isomorphic-fetch"

export default class App extends React.Component {

  static async getInitialProps({ req, query }) {
    if (req !== undefined)
      query.stage = 0;
    console.log(query);
    return { demoStage: parseInt(query.stage || "0") }
  }

  render() {
    const Stage = Flow[this.props.demoStage];
    return (
      <div>
        <Head>
          <title>Hyperpilot Demo!!!</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet  }} />
        </Head>

        <Stage moveToNextStage={() => Router.push({
          pathname: "/",
          query: { stage: this.props.demoStage + 1 }
        })} prefetch />
      </div>
    );
  }

}
