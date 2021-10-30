import React, { Component } from 'react';

import Header from '../header';
import Navbar from '../navbar';
import OrderReviewProduct from './orderReviewProduct';

import { Link } from 'react-router-dom';



class OrderReview extends Component {

    render() {
        const actions = [
            {
                title: "Login", path: "/signin"
            }
        ]

        return (
            <div className="order-review">
                <Header actions={actions}/>
                <Navbar/>
                <h1 className="order-review__title">Order Review</h1>
                <div className="order-review__content review-content">
                    <div className="review-content__header">
                        <label className="review-content__header__name">Name</label>
                        <label className="review-content__header__quantity">Quantity</label>
                        <label className="review-content__header__price">Price</label>
                    </div>
                    <div className="review-content__wrapper">
                        <OrderReviewProduct/> 
                    </div>
                </div>
                <Link className="order-review__back" to="/">Back</Link>
                <Link className="order-review__proceed" to="/shipping-address">Proceed to Checkout</Link>
                <div className="order-review__cost review-cost">
                    <div className="review-cost__subtotal">
                        <label className="title">Subtotal</label>
                        <label className="content">$7.96</label>
                    </div>
                    <div className="review-cost__tax">
                        <label className="title">Tax</label>
                        <label className="content">$0.16</label>
                    </div>
                    <div className="review-cost__shipping">
                        <label className="title">Shipping</label>
                        <label className="content">$0.00</label>
                    </div>
                    <div className="review-cost__total">
                        <label className="title">Total</label>
                        <label className="content">$8.02</label>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default OrderReview;
