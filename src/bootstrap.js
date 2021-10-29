import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore));

// import 'bootstrap/dist/css/bootstrap.css';
import "./style/main.scss";


//installed components

//our components
import Home from "./components/home";
import Signup from "./components/auth/signup";
import Signin from "./components/auth/signin"; 
import App from "./components/app"; 
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import UserInfo from "./components/userInfo/userInfo";
import OrderReview from "./components/orderReview/orderReview";
import ShippingAddress from "./components/shippingAddress/shippingAddress";
import PaymentInformation from "./components/PaymentInformation/PaymentInformation";



function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/home" component={Home} />
         
          <Route path="/signup" component={Signup} />
          <Route path="/signin"  component={Signin} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />


          <Route path="/user-info" component={UserInfo}/>
          <Route path="/order-review" component={OrderReview}/>
          <Route path="/shipping-address" component={ShippingAddress}/>
          <Route path="/payment-information" component={PaymentInformation}/>
          
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

