import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  // Execute when the component is mounted
  constructor(props) {
    // console.log("constructor - ShoppingCart");
    super(props); // Calling super class's constructor

    // Initialization of the state
    this.state = {
      products: [],
    };
  }

  render() {
    // console.log("render - ShoppingCart");
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  // render ends here

  // Execute after constructor and render method (includes life cycle of child components, if any) of current component

  componentDidMount = async () => {
    // console.log("componentDidMount - ShoppingCart");
    // Fetch data from data source
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    console.log(prods);
    this.setState({ products: prods });
  };

  // Executes when the component is updated
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(
  //     "componentDidUpdate - ShoppingCart",
  //     prevProps,
  //     prevState,
  //     this.props,
  //     this.state
  //   );
  // }
  // Executes when the currrent instance component is being deleted from memory
  // componentWillUnmount() {
  //   console.log("componentWillUnmount - ShoppingCart");
  // }

  // Excecute when the userclicks the + button
  handleIncrement = (product, maxValue) => {
    // Get the index selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      // Update the state of the current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  // Excecute when the userclicks the - button
  handleDecrement = (product, minValue) => {
    // Get the index selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      // Update the state of the current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  // Execute when the user clicks on Delete (X) button in the Product components

  handleDelete = (product) => {
    // Get the index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete")) {
      // Delete the product based on index
      allProducts.splice(index, 1);

      // Update the state of the current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}
