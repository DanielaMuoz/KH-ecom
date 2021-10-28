import React, { Component } from 'react';

import Product from './product';

class Store extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [
        {
          imageUrl: "https://www.florespedia.com/Imagenes/flores-bonitas-girasoles.jpg",
          title: "Girasol"
        },
        {
          imageUrl: "https://cdn.pixabay.com/photo/2013/01/27/18/41/flowers-76358_640.jpg",
          title:  "Amapola"
        },
        {
          imageUrl: "https://www.semana.es/wp-content/uploads/2020/05/flores-1068x712.jpg",
          title: "Lirio"
        },
        {
          imageUrl: "https://www.florespedia.com/Imagenes/tipos-de-flores-bonitas-rosas.jpg",
          title: "Rosa"
        },
        {
          imageUrl: "https://www.florespedia.com/Imagenes/lista-de-flores-bonitas-hortensias.jpg",
          title: "Hortensia"
        }
      ]
    }
  }

  renderProducts() {
    return this.state.products.map((product, index) => {
      return (
        <Product key={index} product={product}/>
      )
    })
  }

  render() {
    return (
        <ul className="store">
          {this.renderProducts()}
        </ul>
    );
  }
}

export default Store;
