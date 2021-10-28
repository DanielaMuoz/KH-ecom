import React, { Component } from 'react';
//import Auth from "../pages/auth";
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'; 
import axios from "axios"

class SigninForm extends Component {

    constructor(props) {
        super(props);
          
        this.state = {
          email: "",
          password: "",
          errorText: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
          errorText: ""
        });
      }
    
      handleSubmit(event) {
        event.preventDefault()
        axios
          .post(
            "https://db-kh.herokuapp.com/login",
            {
              
                email: this.state.email,
                password: this.state.password
              
            }
          )
          .then(response => {
            console.log(response.data.user_data.length)
            if (response.data.user_data.length > 0) {
              console.log("data") 
              this.props.handleSuccessfulAuth();
            }  
            else {
              this.setState({
                errorText: "Wrong email or password"
              });
              this.props.handleUnsuccessfulAuth();
            }
          })
          .catch(error => {
            this.setState({
              errorText: "An error occurred"
            });
            this.props.handleUnsuccessfulAuth();
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
        //const { handleSubmit } = this.props;

        return (
            <form className="signin-form" onSubmit={this.handleSubmit}>
                <h1 className="signin-form__login-title">Login</h1>

               
                <div>{this.state.errorText}</div> 
                <div className="signin-form__email">
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    component={this.renderInput}
            />
                    </div>

                <div className="signin-form__password"> 
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    component={this.renderInput}
            />
                </div>
 
                <div className="signin-form__line"></div>
                <button className="signin-form__login-button" type="submit" >Login</button>

                <div className="quicklinks">
                    <div className="quicklinks__title">QuickLinks</div>
                    <Link to="/signup">Not registered? Create account here.</Link>
                    <Link to="/signin">Forgot account email</Link>
                    <Link to="/signin">Forgot Password</Link>
                    <Link className="quicklinks__guest" to="/signin">Continue as a Guest</Link>
                </div>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};
 
    if(!values.email) {
        errors.email = "Enter a valid email address";
    }

    if(!values.password) {
        errors.password = "Enter a password";
    }
   
    return errors;
}

SigninForm = reduxForm({
    form: 'signin',
    validate
})(SigninForm);

export default SigninForm;