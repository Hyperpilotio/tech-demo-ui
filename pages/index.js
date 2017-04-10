import React from "react";
import Head from "next/head";
import Router from "next/router";
import PanelsLayout from '../components/PanelsLayout';
import stylesheet from 'styles/index.scss';


export default class App extends React.Component {

  static async getInitialProps({ req, query }) {
    if (req !== undefined)
      query.stage = 0;
    return { demoStage: parseInt(query.stage || "0") };
  }

  render() {

    let mod;
    try {
      mod = require(`../flow/stage${this.props.demoStage}`);
    } catch (e) {
      if (e.message.startsWith("Cannot find module"))
        mod = { default: "div" };
    }
    const Stage = mod.default;
    const Layout = Stage.Layout || PanelsLayout;
    const beforeMovingOn = mod.beforeMovingOn || (() => Promise.resolve({ ok: true }));

    // Ignore action errors when developing locally, easier to see content changes
    const ignoreActionError = process.env.NODE_ENV !== "production";

    return (
      <div>
        <Head>
          <title>Hyperpilot Demo!!!</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet  }} />
        </Head>

        <Layout>
          <Stage moveToNextStage={() => {
            beforeMovingOn()
              .then(res => Promise.all( [res, res.text && res.text()] ))
              .then(([res, text]) => {
                if (!res.ok) {
                  let errMsg = `Request Failed (${res.status}): ${text}`;
                  if (!ignoreActionError)
                    throw new Error(errMsg);
                  else
                    console.error(errMsg);
                }
                return Promise.resolve();
              })
              .then(() => {
                Router.push({
                  pathname: "/",
                  query: { stage: this.props.demoStage + 1 }
                });
              });
            }
          } />
        </Layout>
      </div>
    );
  }

}
