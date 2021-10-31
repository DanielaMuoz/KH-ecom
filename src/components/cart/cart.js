import React, { Component } from 'react';

import CartProduct from './cartProduct';

import { Link } from 'react-router-dom';

function CartContent({className, products}) {
    let count = products.length;
    let productsJSX = products.map(product => <CartProduct {...product} key={product._id}/>);
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>
                {productsJSX}
            </div>
            <CartFooter className='cart-content__footer' products={products}/>
        </div>
    )
}

function CartFooter({className, products}) {
    let subtotal = 0;
    products.map(cartProduct => {
        subtotal += cartProduct.quantity * cartProduct.product.price;
    })
    return (
        <div className={`${className} cart-footer`}>
            <a onClick={() => history.push('/order/review')} className='cart-footer__checkout'>
                Checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div className='cart-footer__price'>
                ${subtotal}
            </div>
        </div>
    )
}

class Cart extends Component {

    componentDidMount() {
       // this.props.fetchCartProducts();
    }

    handleAddToCart = () => {
        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }

    render() {
        
        return (
            <div className="cart">

                <div className="cart__toggle">
                    <a className="fa">&#xf00d;</a>
                </div>

                <div className="cart__body">
                    <div className="cart__body__title">
                        Cart
                    </div>
                    <div className="cart__body__products">
                        <div className="cart__body__products__wrapper">
                            <CartProduct/>             
                        </div>
                    </div>
                    <div className="cart__body__footer">
                        <div className="cart__body__footer__checkout">
                            <Link to="/order-review">Checkout</Link>
                        </div>
                        <div className="cart__body__footer__subtotal">Subtotal</div>
                        <div className="cart__body__footer__total">$7.96</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Cart;