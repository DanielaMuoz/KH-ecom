import React, { Component } from 'react';

import Header from '../header';
import Navbar from '../navbar';

import PurchaseHistory from './purchaseHistory';
import AccountInformationForm from './accountInformationForm';

class UserInfo extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            activePage: 'Purchase History'
        }

        this.handleChangePage = this.handleChangePage.bind(this);
    }

    handleChangePage(actionTitle) {
        console.log(actionTitle);

        if(actionTitle == 'Purchase History') {
            this.setState({ activePage: 'Purchase History' })
        } else {
            this.setState({ activePage: 'Account Information' })
        }
    }

    render() {
        const actions = [
            {
                title: "Shop", path: "/"
            },
            {
                title: "Logout", path: "/"
            }
        ]

        const navbarActions = [
            {
                title: 'Purchase History',
                callback: this.handleChangePage
            },
            {
                title: 'Account Information',
                callback: this.handleChangePage
            }
        ]
        return (
            <div className="user-info">
                <Header actions={actions}/>
                <Navbar actions={navbarActions}/>
                {
                    this.state.activePage === 'Purchase History' ? <PurchaseHistory/> : <AccountInformationForm/>
                }
            </div>
        )
    }
}

export default UserInfo;