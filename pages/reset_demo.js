import Head from "next/head";
import React from "react";
import fetch from "isomorphic-fetch";
import { ContinueButton } from "../components";
import bulma from "bulma/bulma.sass";


export default class ResetDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { responseData: null };
  }

  async resetDemo() {
    let res = await fetch("/actions/reset_demo");
    let data = await res.json();
    let responseData = Object.keys(data).map(title => ({ title, data: data[title] }));
    this.setState({ responseData });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Reset Demo (Dangerous)</title>
          <style dangerouslySetInnerHTML={{ __html: bulma }}></style>
        </Head>

        <section className="hero is-danger is-bold is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              {this.state.responseData ?
                this.state.responseData.map(({ title, data }) => (
                  <div className="card" style={{margin: "1rem"}}>
                    <div className="card-content">
                      <h3 className="title is-3" style={{color: "grey"}}>{title}</h3>
                      <div className="box">
                        <h5 className="subtitle is-5" style={{color: "black"}}>STDOUT</h5>
                        <pre>{data.stdout}</pre>
                      </div>
                      <div className="box">
                        <h5 className="subtitle is-5" style={{color: "black"}}>STDERR</h5>
                        <pre>{data.stderr}</pre>
                      </div>
                    </div>
                  </div>
                  )) :
                <ContinueButton btnClass="is-danger" onClick={::this.resetDemo}>Reset Demo</ContinueButton>
              }
            </div>
          </div>
        </section>

      </div>
    );
  }

}
