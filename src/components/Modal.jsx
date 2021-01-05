import React, { Component } from "react";

class Modal extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (evt) => {
    if (evt.keyCode === "Escape") {
      this.props.close();
    }
  };
  handleBackdropClick = (evt) => {
    console.log('11')
    if (evt.currentTarget === evt.target) {
      this.props.close();
    }
  };

  render() {
    const { url, alt } = this.props;
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={url.src} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
