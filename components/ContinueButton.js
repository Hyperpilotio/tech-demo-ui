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
          onClick={() => {this.setIsLoading(); this.props.onClick();}} >
        {this.props.children}
      </a>
    );
  }

  setIsLoading() {
    this.setState({ isLoading: true });
  }
}
