import React, { Component } from "react";

export default class Product extends Component {
  state = {
    product: this.props.product,
  };
  render() {
    // console.log(this.props);
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <span
              className="pull-right hand-icon"
              onClick={() => {
                this.props.onDelete(this.state.product);
              }}
            >
              <i className="fa fa-times"></i>
            </span>
            <div className="text-muted"># {this.state.product.id}</div>

            <h5 className="p-2 border-top">{this.state.product.productName}</h5>

            <div>${this.state.product.price}</div>
          </div>
          {/* card body ends here */}

          <div className="card-footer">
            <div className="float-start">
              <span className="badge">{this.state.product.quantity}</span>

              <div className="btn-group ms-1">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            {/* float left ends here */}
            <div className="float-end">{this.props.children}</div>
          </div>
          {/* card footer end here */}
        </div>
      </div>
    );
  }

  // Executes when the currrent instance component is being deleted from memory
  //   componentWillUnmount() {
  //     console.log("componentWillUnmount - Product");
  //   }
}