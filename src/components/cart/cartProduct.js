import React, { Component } from "react";
import axios from "axios"

import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';


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

    console.log(this.props);
    //const { className, product, quantity,price } = this.props;
    //const { name, price } = product;
    const { className } = this.props;

    return (
      <div className={`${className} cart-product`}>
        {this.state.products.map(product => (
          <div>
        <div className="product-wrapper" key={product.id}>
         
        </div>
      <img className='cart-product__image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTceSk7go39ITBpY-hozo_9o_4KEp6LAqbPng&usqp=CAU'/>
      <div className='cart-product__title'>{product.name}</div>
      <Quantity className='cart-product__quantity' quantity={1}/>
      <a className='cart-product__remove'>Remove</a>
      <GreenPriceTag className='cart-product__price' title={product.price}/>
      </div>
        ))}
  </div>
        
    );
  }
}

export default CartProduct;