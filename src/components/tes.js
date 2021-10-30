import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddProduct from "../components/add-product"
import Home from "../components/home";
import Signup from "../components/auth/signup";
import Signin from "../components/auth/signin"; 
import App from "../components/app"; 
import About from "../components/pages/about";
import Contact from "../components/pages/contact";
import UserInfo from "../components/userInfo/userInfo";
import OrderReview from "../components/orderReview/orderReview";
import ShippingAddress from "../components/shippingAddress/shippingAddress";
import PaymentInformation from "../components/PaymentInformation/PaymentInformation";

export default class Test extends Component {
    constructor(props) {
        super(props);


    }



    render() {
        return (
            <div className="container">
                <Router>
                    <div>


                        <Switch>

                            <Route path="/" exact component={App} />
                            <Route path="/home" component={Home} />
                            <Route path="/add-product" component={AddProduct} />

                            <Route path="/signup" component={Signup} />
                            <Route path="/signin" component={Signin} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />


                            <Route path="/user-info" component={UserInfo} />
                            <Route path="/order-review" component={OrderReview} />
                            <Route path="/shipping-address" component={ShippingAddress} />
                            <Route path="/payment-information" component={PaymentInformation} />


                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}