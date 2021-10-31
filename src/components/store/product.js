import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import Quantity from '../quantity';

class Product extends Component {
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
                <p>${product.price}</p>
            </div>
        ))

        return productsHtml
    }

    handleAddToCart = () => {
        if (document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
            const { id, name, price, total  } = this.props;
            this.props.addCartProduct({ id,name, price ,total});
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }

    render() {
        const product = this.props.product;
        
        return (
            <div className="align_products">
            {this.state.products.map(product => (
            <div className="product">
              
                <div className="product__front">
                    <img className='shop-product__front__image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTceSk7go39ITBpY-hozo_9o_4KEp6LAqbPng&usqp=CAU" />
                </div>
                <div className="product__back back">
                    <h1 className="back__title">product</h1>
                   
                        <div className="product-wrapper" key={product.id}>
                            <h3>{product.name}</h3>
                      
                        </div>
                    <p className="back__description">We provide the best experience for our customer.</p>
                    <div className="back__price"><h3>${product.price.toFixed(2)}</h3></div>
                    <Quantity className='shop-product__back__quantity' quantity={1}/> 
                    <a onClick={this.handleAddToCart} className='shop-product__back__add-to-cart'>
                        Add to Cart
                    </a>
                </div>
             
            </div>
            ))}
            </div>
        )
    }
}

/*ShopProduct = connect(null)(ShopProduct);*/


export default Product;