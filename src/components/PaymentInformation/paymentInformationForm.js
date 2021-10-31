import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import Modal from '../modal';

class PaymentInformationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
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
        const { handleSubmit } = this.props;

        return (
            <form className="payment-information-form" onSubmit={handleSubmit}>
                <h1 className="payment-information-form__title">Payment Information</h1>
                <div className="payment-information-form__name-on-credit-card">
                    <label>Name on Credit Card</label>
                    <input 
                    name="name"
                    type="text" component={this.renderInput}  />  
                </div>
                <div className="payment-information-form__credit-card-number">
                    <label>Credit Card Number</label>
                    <input 
                    name="credit-card-number"
                    type="text" component={this.renderInput}  />  
                </div>
                <div className="payment-information-form__expiration-date">
                    <label>Expiration Date</label>
                    <input 
                    name="expiration-date"
                    type="text" component={this.renderInput}  />  
                </div>
                <div className="payment-information-form__ccv">
                    <label>CCV</label>
                    <input 
                    name="ccv"
                    type="text" component={this.renderInput}  /> 
                </div> 
                <div className="payment-information-form__line"></div>
                <Link className="payment-information-form__back" to="/order-review">Back</Link>
                <a className="payment-information-form__pay-and-complete-order" onClick={() => this.setState({ showModal: true })}>Pay and Complete Order</a>

                <div className="payment-information-form__order-summary order-summary">
                    <h1 className="order-summary__title">Order Summary</h1>
                    <div className="order-summary__products">
                        <label>4 stickers</label>
                        <label>$7.96</label>
                    </div>
                    <div className="order-summary__taxes-shipping">
                        <label>Taxes & Shipping</label>
                        <label>$0.16</label>
                    </div>
                    <div className="order-summary__total">
                        <label>Total</label>
                        <label>$8.02</label>
                    </div>
                </div>
                <div className="payment-information-form__shipping-to shipping-to">
                    <h1 className="shipping-to__title">Shipping To</h1>
                    <label className="shipping-to__name">Daniela Munoz</label>
                    <label className="shipping-to__address">45 West Broad st...</label>
                </div>
                {
                    this.state.showModal ? 
                    <Modal
                        title="Thank You!"
                        message="Your order number is: A0029872922
                        We’ve received your order and it will be fulfilled and 
                        shipped within the next business day.
                        Login to your account for purchase history and order 
                        shipping information."
                        buttons = {
                            [
                                <Link key={0} to="/"><button className="modal-box__save-address">Got It!</button></Link>,
                            ]
                        }
                        onTapOutside={() => this.setState({ showModal: false })}
                    /> 
                    : ''
                }
            </form>
        )
    }
}

function validate(values) {
    const errors = {};
    return errors;
}

PaymentInformationForm = reduxForm({
    form: 'paymentinformation',
    validate
})(PaymentInformationForm);

export default PaymentInformationForm;