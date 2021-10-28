import React, { Component } from 'react';

import { Details, PurchasedProduct } from './details';
// import {  } from './purchasedProduct';

class PurchaseHistory extends Component {

    renderProducts(productsData) {
        return productsData.map((product, index) => {
            return PurchasedProduct(product, index)
        })
    }

    render() {
        const productsData = [
            {imageUrl: 'http://via.placeholder.com/80x80'},
            {imageUrl: 'http://via.placeholder.com/80x80'},
            {imageUrl: 'http://via.placeholder.com/80x80'},
            {imageUrl: 'http://via.placeholder.com/80x80'},
            {imageUrl: 'http://via.placeholder.com/80x80'},
            {imageUrl: 'http://via.placeholder.com/80x80'}
        ]

        return (
            <div className="purchase-history">
                <h1 className="purchase-history__title">Purchase History</h1>
                <div className="purchase-history__products">
                    {this.renderProducts(productsData)}
                </div>
                <div className="purchase-history__details details">
                    {Details('Order Number', 'A004847493', 'order-number')}
                    {Details('Order Date', '01/03/18', 'order-date')}
                    {Details('Shipping Address', `J-Hidgey 1234 WEST STATE`, 'shipping-address')}
                    {Details('Total', '$8.02', 'total')}
                    {Details('Credit Card', '-0000', 'credit-card')}
                    <div className="details__link details__track-shipment">
                        Track Shipment
                    </div>
                    <div className="details__link details__print-receipt">
                        Print Receipt
                    </div>
                </div>
                <div className="purchase-history__line"></div>
            </div>
        )
    }
}

export default PurchaseHistory;