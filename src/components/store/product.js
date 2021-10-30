import React, { Component } from 'react';

class Product extends Component {
    render() {
        const product = this.props.product;

        return (
            <div className="product">
                <div className="product__front">
                 
                  
                </div>
                <div className="product__back back">
                    <h6 className="back__title"></h6>
                    <p className="back__description">We provide the best experience for our customer.</p>
                    <div className="back__price">$6.00</div>
                    <div className="back__amount-box">1</div>
                    <div className="back__plus"><a className="fa">&#xf067;</a></div>
                    <div className="back__minus"><a className="fa">&#xf068;</a></div>
                    <a className="back__add-to-cart">Add to Cart</a>
                </div>
            </div>
        )
    }
}

export default Product;