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
       
          <img className="cart-product__image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTceSk7go39ITBpY-hozo_9o_4KEp6LAqbPng&usqp=CAU' />
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