import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../lib/index';

class App extends Component {
  state = {
    isOpen: false
  }

  handleOpenModal = ev => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Open Modal</button>
        <Modal isOpen={this.state.isOpen}>
          content outside
        </Modal>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
