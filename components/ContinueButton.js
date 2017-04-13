import React from "react";


export default class ContinueButton extends React.Component {

  constructor(props) {
    super(props);
    this.btnClass = props.btnClass || "is-primary";
    this.state = { isLoading: false };
  }

  render() {
    return (
      <a className={`button ${this.btnClass} is-inverted is-medium is-outlined
        ${this.state.isLoading ? "is-loading" : ""}`}
        onClick={async () => {
          this.toggleLoading();
          try {
            await this.props.onClick();
          } catch (e) {
            console.error(e);
            this.toggleLoading();
          }
        }} >
        {this.props.children}
      </a>
    );
  }

  toggleLoading() {
    this.setState({ isLoading: !this.state.isLoading});
  }

}
