import React, { Component } from "react";

export default class CustomerList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "John",
        phone: "875-876",
        address: { city: "Nairobi" },
        photo: "https://picsum.photos/id/200/60",
      },
      {
        id: 2,
        name: "Smith",
        phone: null,
        address: { city: "Kisumu" },
        photo: "https://picsum.photos/id/259/60",
      },
      {
        id: 3,
        name: "Peter",
        phone: "875-324",
        address: { city: "Wajir" },
        photo: "https://picsum.photos/id/265/60",
      },
      {
        id: 4,
        name: "Tom",
        phone: "975-876",
        address: { city: "Oloitoktok" },
        photo: "https://picsum.photos/id/279/60",
      },
      {
        id: 5,
        name: "Jerry",
        phone: null,
        address: { city: "Moyale" },
        photo: "https://picsum.photos/id/372/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  // Execute when the user clicks on refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  // Execute when the user clicks on change picture button
  // cust is the customer object and index is the index of the customer object in the array
  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);

    // get existing customers array
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/457/60";

    //update customers array in the state

    this.setState({ customers: custArr });
  };
}
