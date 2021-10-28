import React, { Component } from 'react';

class OrderReviewProduct extends Component {
    render() {
        return (
            <div className="order-review-product">
                <img src="https://via.placeholder.com/80x80"/>
                <label className="order-review-product__name">Web App Dev In Rails</label>
                <label className="order-review-product__quanity">1</label>
                <label className="order-review-product__price">$1.99</label>
            </div>
        )
    }
}

export default OrderReviewProduct;