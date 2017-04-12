import React from "react";


export default class ContentModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isActive: "is-active" };
  }

  showModal() {
    this.setState({ isActive: "is-active animated fadeIn" })
  }
  hideModal() {
    // XXX: Should take is-active out after animation finished
    this.setState({ isActive: "is-active animated fadeOut" });
  }

  render() {
    return (
      <div>
        <a className="button is-small is-inverted is-outlined is-primary" onClick={::this.showModal}>
          Show Description
        </a>
        <div ref="modalElem" className={`modal ${this.state.isActive}`}>
          <div className="modal-background" onClick={::this.hideModal} />
          <div className="modal-content">
            <div className="card">
              <div className="card-content">
                <content className="content has-text-left">
                  {this.props.children}
                </content>
              </div>
            </div>
          </div>
          <div className="modal-close" onClick={::this.hideModal} />
        </div>
      </div>
    );
  }

}
