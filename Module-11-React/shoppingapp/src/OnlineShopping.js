import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        new Cart('Laptop', 999.99),
        new Cart('Smartphone', 699.99),
        new Cart('Headphones', 149.99),
        new Cart('Tablet', 449.99),
        new Cart('Smartwatch', 299.99)
      ]
    };
  }

  render() {
    const { cartItems } = this.state;
    const total = cartItems.reduce((sum, item) => sum + item.Price, 0);

    return (
      <div className="shopping-container">
        <h1>Online Shopping Cart</h1>
        <table className="shopping-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Item Name</th>
              <th>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Itemname}</td>
                <td>{item.Price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2"><strong>Total</strong></td>
              <td><strong>${total.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;