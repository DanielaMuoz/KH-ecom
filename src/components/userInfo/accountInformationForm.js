import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class AccountInformationForm extends Component {

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
        const { handleSubmit } = this.props;

        return (
            <form className="account-information-form" onSubmit={handleSubmit}>
                <h1 className="account-information-form__account-information">Account Information</h1>
                <div className="account-information-form__name">
                    <label>Name</label>
                    <Field name="name" type="text" component={this.renderInput}/>
                </div>
                <div className="account-information-form__email">
                    <label>Email</label>
                    <Field name="email" type="email" component={this.renderInput}/>
                </div>
                <div className="account-information-form__password">
                    <label>Current Password</label>
                    <Field name="password" type="password" component={this.renderInput}/>
                </div>
                <div className="account-information-form__new">
                    <label>New Password</label>
                    <Field name="new" type="password" component={this.renderInput}/>
                </div>
                <div className="account-information-form__confirm">
                    <label>Confirm Password</label>
                    <Field name="confirm" type="password" component={this.renderInput}/>
                </div>

                <div className="account-information-form__street-address">
                    <label>Street Address</label>
                    <Field name="street-address" type="text" component={this.renderInput}/>
                </div>
                <div className="account-information-form__city">
                    <label>City</label>
                    <Field name="city" type="text" component={this.renderInput}/>
                </div>
                <div className="account-information-form__state">
                    <label>State</label>
                    <Field name="state" type="text" component={this.renderInput}/>
                </div>
                <div className="account-information-form__zipcode">
                    <label>Zipcode</label>
                    <Field name="zipcode" type="zipcode" component={this.renderInput}/>
                </div>
                <div className="account-information-form__line"></div>
                <Link className="account-information-form__cancel" to="/">Cancel</Link>
                <button className="account-information-form__button" type="submit">Update Information</button>
            </form>
        )
    }
}

function validate(values) {
    const errors = []
    return errors;
}

AccountInformationForm = reduxForm({
    form: "account-information",
    validate
})(AccountInformationForm);

export default AccountInformationForm;


