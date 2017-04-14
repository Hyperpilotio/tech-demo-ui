import React from "react";


export default class ContinueButton extends React.Component {

  constructor(props) {
    super(props);
    this.btnClass = props.btnClass || "is-primary";
    this.noNextPage = props.noNextPage && "is-disabled" || "";
    this.state = { isLoading: "", text: props.text, actionDone: false };
  }

  render() {
    return (
      <a className={`button ${this.btnClass} is-inverted is-medium is-outlined ${this.state.isLoading} ${this.state.actionDone ? this.noNextPage : ""}`}
        onClick={async () => {

          if (!this.state.actionDone && this.props.doRun !== undefined) {
            this.toggleLoading();
            let success = await this.props.doRun();
            this.toggleLoading();
            if (success) {
              if (this.props.directlyNextPage) {
                this.props.nextPage();
              } else {
                this.setState({ text: "Next Page", actionDone: true });
              }
            } else {
              this.setState({ text: "Failed: Try Again" });
            }

          } else {
            this.props.nextPage();
          }
        }} >
        {this.state.text}
      </a>
    );
  }

  toggleLoading() {
    this.setState({ isLoading: this.state.isLoading === "" ? "is-loading": "" });
  }

}
