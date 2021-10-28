import React, { Component } from "react"; 

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/home");
  }

  handleUnsuccessfulAuth() {
    this.props.handleUnsuccessfulLogin();
    this.props.history.push("/signin");
  }

  
  onSubmit = (renderInput) => {
    this.props.signIn(renderInput);
    this.props.history.push('/home');
}

  
}