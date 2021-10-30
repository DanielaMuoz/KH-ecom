import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignupForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
          registrationErrors: ""
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit(event) {
        event.preventDefault()
        const {name, email, password, password_confirmation } = this.state;
    
        axios
          .post(
            "https://db-kh.herokuapp.com/user/add",
            {
             
                name: name,
                email: email,
                password: password,
            
            
            },
          
          )
          .then(response => {
              console.log(this.state)
            if (response.data.status === "created") {
              //this.props.handleSuccessfulAuth(response.data);
            }
          })
          .catch(error => {
            console.log("registration error", error);
          });
      }

      
    renderInput(field) {
        return (
            <div>
                <input {...field.input} type={field.type}/>
                <span className="form-error">
                {
                    field.meta.touched && field.meta.error && <span> {field.meta.error} </span>
                }    
                </span> 
            </div>
        )
    }

    render() {

        return (
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <h1 className="signup-form__register">Register</h1>
                <div className="signup-form__name">
                    <label>Name</label>
                    <input
                    type="name"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    component={this.renderInput}
                    required
          /> 
                </div>
                <div className="signup-form__email">
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    component={this.renderInput}
                    required
          /> 
                </div>

                <div className="signup-form__password">
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    component={this.renderInput}
                    required
          /> 
                </div>
                <div className="signup-form__confirm">
                    <label>Confirm Password</label>
                    <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Password confirmation"
                    value={this.state.password_confirmation}
                    onChange={this.handleChange}
                    component={this.renderInput}
                    required
          /> 
                </div>
                <div className="signup-form__line"></div>
                <Link className="signup-form__back" to="/signin">Back</Link>
                <button className="signup-form__submit" type="submit">
                    <Link to="/home"> Create Account</Link>
                </button>

                <div className="password-requirements">
                    <div className="password-requirements__title">Password Requirements</div>
                    <label>At least characters</label>
                    <label>At least one number</label>
                    <label>At least one symbol</label>
                </div>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if(!values.name) {
        errors.name = "Enter your name";
    }

    if(!values.email) {
        errors.email = "Enter a valid email address";
    }

    if(!values.password) {
        errors.password = "Enter a password";
    }

    if(!values.confirm) {
        errors.confirm = "Confirm your password";
    }

    if(values.password != values.confirm) {
        errors.confirm = "Passwords do not match"
    }

    return errors;
}

SignupForm = reduxForm({
    form: 'signup',
    validate
})(SignupForm);

export default SignupForm;