import React, { Component } from 'react';

class OrderReviewProduct extends Component {
    render() {
        return (
            <div className="order-review-product">
                <img src="https://via.placeholder.com/80x80"/>
                <label className="order-review-product__name">Rosa</label>
                <label className="order-review-product__quanity">1</label>
                <label className="order-review-product__price">$6.00</label>
            </div>
        )
    }
}

export default OrderReviewProduct;