import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  static defaultProps = {
    isOpen: false
  }

  renderModal() {
    return (
      <div>
        <div className="rmes6__overlay rmes6__overlay--bg">
          <div className="rmes6__content rmes6__content--bg">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  render() {
    let modal = this.props.isOpen ? this.renderModal() : null;
    return (
      <div>
        {modal}
      </div>
    )
  }
}
