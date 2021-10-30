import React, { Component } from 'react'
import { Link } from 'react-router-dom';
 

import { withRouter } from 'react-router'; 
import Header from './header';
import Navbar from './navbar';

export default class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInput: "",
            priceInput: "",
            loading: false,
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            loading: true,
            error: false
        })

        fetch("https://db-kh.herokuapp.com/product/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: this.state.nameInput,
                price: parseFloat(this.state.priceInput)
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.props.history.push("/home")
            }
        })
        .catch(error => {
            console.log("Error adding product ", error)

            this.setState({
                loading: false,
                error: true
            })
        })
    }

    render() {
        const actions = [
            {
              title: "Shop", path: "/home"
            }
          ]
      
          const navbarActions = [
      
            {
              title: 'About',
              callback: this.filterCategory, 
              path: '/about'
             
            },
            {
              title: 'Contact',
              callback: this.filterCategory,
              path: '/contact'
            }    
          ]
         
        return (
            <div className="home">
            <Header actions={actions}/>
            <Navbar actions={navbarActions}/>
            <div className='add-product-wrapper'>
                <h2>Add Product</h2>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="name"
                        name="nameInput" 
                        value={this.state.nameInput}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text" 
                        placeholder="price"
                        name="priceInput" 
                        value={this.state.priceInput}
                        onChange={this.handleChange}
                    />

                    <button type="submit" disabled={this.state.loading}>Add Product</button>
                </form>

                {this.state.loading ? <div className="loading">Submitting...</div> : null}

                {this.state.error ? <div className="error">An error occured... Please try again later.</div> : null}
            </div>
            </div>
        )
    }
}