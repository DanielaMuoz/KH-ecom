import React, { Component } from 'react';
 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import logo from './images/logo.png'

class Header extends Component {

  renderLinks() {
      let navLinks = []

      navLinks = this.props.actions.map((action, index) => {
        return (
          <Link to={action.path} key={index} className="header__link">
            {action.title}
          </Link>
        )
      })

      return navLinks
  }


  render() {
    return (
        <div className="header"> 
       <div className="header-img">
      <img src= {logo} />
      </div>
          <div className="header__links">
            {this.renderLinks()}
          </div>
        </div>
    );
  }
}

Header.propTypes = {
  actions: PropTypes.array.isRequired
}

export default Header;
