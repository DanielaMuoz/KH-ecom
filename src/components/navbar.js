import React, { Component } from 'react';

class Navbar extends Component {

  renderActions() {
    if(this.props.actions) {
      const actions = this.props.actions.map((action, index) => {
        return (
          <a key={index} onClick={() => action.callback(action.title)}>{action.title}</a>
        )
      });
      return actions;
    }
  }


  render() {
    return (
        <ul className="navbar">
          {this.renderActions()}
        </ul>
    );
  }
}

export default Navbar;
