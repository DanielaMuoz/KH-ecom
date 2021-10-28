import React, { Component } from "react";

class CartProduct extends Component {
  render() {
    return (
      <div className="cart-product">
        <img className="cart-product__image" src='https://via.placeholder.com/130x130' />
        <div className="cart-product__title">Web app dev in rails</div>
        <div className="cart-product__amount-box">1</div>
        <div className="cart-product__plus">
          <a className="fa">&#xf067;</a>
        </div>
        <div className="cart-product__minus">
          <a className="fa">&#xf068;</a>
        </div>
        <a className="cart-product__remove">Remove</a>
        <div className="cart-product__price">$1.99</div>
      </div>
    );
  }
}

export default CartProduct;