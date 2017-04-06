import React from "react"
import Head from "next/head"
import Router from "next/router"
import classNames from "classnames"
import stylesheet from 'styles/index.scss'
import PanelsLayout from '../flow/PanelsLayout'


export default class App extends React.Component {

  static async getInitialProps({ req, query }) {
    if (req !== undefined)
      query.stage = 0;
    return { demoStage: parseInt(query.stage || "0") }
  }

  render() {

    let mod;
    try {
      mod = require(`../flow/stage${this.props.demoStage}`);
    } catch (e) {
      if (e.message.startsWith("Cannot find module")) {
        mod = { default: "div" };
      }
    }
    const Stage = mod.default;
    const Layout = Stage.Layout || PanelsLayout;
    const beforeMovingOn = mod.beforeMovingOn || (() => Promise.resolve());

    return (
      <div>
        <Head>
          <title>Hyperpilot Demo!!!</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet  }} />
        </Head>

        <Layout>
          <Stage moveToNextStage={() => {
            beforeMovingOn()
              .then(() => {
                Router.push({
                  pathname: "/",
                  query: { stage: this.props.demoStage + 1 }
                });
              })
            }
          } />
        </Layout>
      </div>
    );
  }

}
