import React, { Component } from 'react';

import Header from '../header';
import Navbar from '../navbar';

import ShippingAddressForm from './ShippingAddressForm';

class ShippingAddress extends Component {

    handleFormSubmit(values) {
        const { name, email, city, state, zipcode } = values;

        // this.props.history.push('/user-info');
    }

    render() {
        return (
            <div className="shipping-address">
                <Header actions={[]}/>
                <Navbar/>
                <ShippingAddressForm onSubmit={(values) => this.handleFormSubmit(values)}/>
            </div>
        )
    }
}

export default ShippingAddress;