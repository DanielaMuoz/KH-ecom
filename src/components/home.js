import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './header';
import Navbar from './navbar';
import SearchBar from './searchBar';
import Store from './store/store';
import Cart from './cart/cart'; 
import { withRouter } from 'react-router'; 
 

class Home extends Component {

  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this); 
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/");
  }


  filterCategory(action) {
    console.log(action);
  }

  render() {

    const actions = [
      {
        title: "Login", path: "/signin"
      }
    ]

    const navbarActions = [
 
      {
        title: 'Add product',
        callback: this.filterCategory, 
        path: '/add-product'
       
      },
      {
        title: 'About',
        callback: this.filterCategory, 
        path: '/about'
       
      },
      {
        title: 'Contact',
        callback: this.filterCategory,
        path: '/contact'
      }    
    ]
   
    return (
      <div className="home">
        <Header actions={actions}/>
        <Navbar actions={navbarActions}/>
        <SearchBar/>
        <Store/>
       

 
        <Cart/>
      </div>
    );
  }
} 

export default withRouter(Home);
