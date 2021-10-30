import React, { Component } from 'react'; 

class Product extends Component { 
    handleAddToCart = () => {
        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
            const { _id, title, description, price, belongsTo, imageUrl } = this.props;
            this.props.addCartProduct({ _id, title, description, price, belongsTo, imageUrl });
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }

    render() {
        const product = this.props.product;

        return (
            <div className="product">
                <div className="product__front">
                <img className='shop-product__front__image' src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTceSk7go39ITBpY-hozo_9o_4KEp6LAqbPng&usqp=CAU"/>
                </div>
                <div className="product__back back">
                    <h3 className="back__title">Rosa</h3>
                    <p className="back__description">We provide the best experience for our customer.</p>
                    <div className="back__price">$6.00</div>
                    <div className="back__amount-box">1</div>
                    <div className="back__plus"><a className="fa">&#xf067;</a></div>
                    <div className="back__minus"><a className="fa">&#xf068;</a></div>
                    <a onClick={this.handleAddToCart} className='shop-product__back__add-to-cart'>
                        Add to Cart
                    </a>
                </div>
            </div>
        )
    }
}

export default Product;