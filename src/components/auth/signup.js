import React, { Component } from "react";

import SignupForm from "./signupForm";

import Header from "../header";
import Navbar from "../navbar"; 


class Signup extends Component {

  handleFormSubmit({ name, email, password }) {
    console.log("This is working good.", name, email, password);
  }

  render() {
    const actions = [
      {
        title: "Shop",
        path: "/home"
      },
      {
        title: "Login",
        path: "/signin"
      }
    ];

    return (
      <div className="signup">
        <Header actions={actions} />
        <Navbar />
        <SignupForm onSubmit={this.handleFormSubmit} />
      </div>
    );
  }

}

export default Signup;