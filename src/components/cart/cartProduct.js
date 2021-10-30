import React, { Component } from "react";
import axios from "axios"

class CartProduct extends Component {

  constructor(props) {
    super(props)

    this.state = {
        products: [],
        loading: true,
        error: false
    }
}

componentDidMount() {
    fetch("https://db-kh.herokuapp.com/products")
    .then(response => response.json())
    .then(data => {
      console.log(data)
        this.setState({
            products: data,
            loading: false
        })
    })
    .catch(error => {
        console.log("Error getting products ", error)
        this.setState({
            error: true,
            loading: false
        })
    })
}

renderProducts() {
    const productsHtml = this.state.products.map(product => (
        <div className="product-wrapper" key={product.id}>
            <h1>{product.name}</h1>
            <p>${product.price.toFixed(2)}</p>
        </div>
    ))

    return productsHtml
}

  render() {
    return (
      <div className="cart-wrapper">
        <div className="cart-product">
       
          <img className="cart-product__image" src='data:image/jpeg;base64,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' />
          <div className="cart-product__title">  
          {this.state.products.map(product => (
              <div className="product-wrapper" key={product.id}>
              <h1>{product.name}</h1>
               
           <div className="cart-product__price">
           <h3>${product.price.toFixed(2)}</h3>
          </div> 
           </div>))}
          </div>
            <div className="cart-product__amount-box">1</div>
          <div className="cart-product__plus">
            <a className="fa">&#xf067;</a>
          </div>
          <div className="cart-product__minus">
            <a className="fa">&#xf068;</a>
          </div>
        <a className="cart-product__remove">Remove</a>
       
        </div>
        </div>
        
    );
  }
}

export default CartProduct;