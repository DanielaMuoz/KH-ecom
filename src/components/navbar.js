import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  renderActions() {
    if(this.props.actions) {
      const actions = this.props.actions.map((action, index) => {
        return (
          <div>    
            <Link to={action.path}>      
            <a key={index} onClick={() => action.callback(action.title)}>{action.title}</a>
            </Link>
          </div>
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
