import React from 'react';
import "./App.css";
import data from './data.json';

import Products from "./Components/Products";
import Filter from './Components/Filter';
import Cart from './Components/Cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: ""
    }
    this.sortProducts = this.sortProducts.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart(product) {
    const cartItems = [...this.state.cartItems];
    this.setState({ cartItems: cartItems.filter(item => item._id !== product._id) })
  }

  addToCart(product) {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  }

  sortProducts(e) {
    console.log(e.target.value);
    const sort = e.target.value;
    let products;
    if(sort === 'lowest') {
      products = this.state.products.sort((a, b) => a.price - b.price);
    } else if(sort === 'highest') {
      products = this.state.products.sort((a, b) => b.price - a.price);
    } else {
      products = this.state.products.sort((a, b) => b._id - a._id);
    }

    this.setState({
      sort,
      products
    });
  }

  filterProducts(e) {
    console.log(e.target.value);
    const sort = this.state.sort;
    let products;
    if(sort === 'lowest') {
      products = data.products.sort((a, b) => a.price - b.price);
    } else if(sort === 'highest') {
      products = data.products.sort((a, b) => b.price - a.price);
    } else {
      products = data.products.sort((a, b) => b._id - a._id);
    }

    if(e.target.value === "") {
      this.setState({
        size: e.target.value,
        products: products
      });
    } else {
      this.setState({
        size: e.target.value,
        products: products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0)
      });
    }
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts} />
              <Products products={this.state.products} addToCart={this.addToCart}/> 
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
            </div>
          </div>
        </main>
        <footer>All rights reserved.</footer>
      </div>
    );
  }
}

export default App;
