import React, { Component } from 'react';

import Header from './header';
import Navbar from './navbar';
import SearchBar from './searchBar';
import Store from './store/store';
import Cart from './cart/cart';
import About from "./pages/about";
import Contact from "./pages/contact";


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
        title: 'All',
        callback: this.filterCategory
      },
      {
        title: 'Flowers',
        callback: this.filterCategory
      },
      {
        title: 'About',
        callback: this.filterCategory
   
      },
      {
        title: 'Contact',
        callback: this.filterCategory
      },    
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

export default Home;
