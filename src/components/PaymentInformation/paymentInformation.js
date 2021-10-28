import React, { Component } from 'react';

import Header from '../header';
import Navbar from '../navbar';

import PaymentInformationForm from './PaymentInformationForm';

class PaymentInformation extends Component {

    handleFormSubmit(values) {
        const { name, email, city, state, zipcode } = values;

        // this.props.history.push('/user-info');
    }

    render() {
        return (
            <div className="payment-information">
                <Header actions={[]}/>
                <Navbar/>
                <PaymentInformationForm onSubmit={(values) => this.handleFormSubmit(values)}/>
            </div>
        )
    }
}

export default PaymentInformation;