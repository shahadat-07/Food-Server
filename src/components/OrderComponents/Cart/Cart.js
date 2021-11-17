import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, menu) => total + menu.menuPrice, 0);

  let deliveryCost = 0;
  if (total > 200) {
    deliveryCost = 0;
  } else if (total > 100) {
    deliveryCost = 25;
  } else if (total > 0) {
    deliveryCost = 50;
  }
  const VAT = (total / 10).toFixed(2);
  const subTotal = total + deliveryCost + Number(VAT);

  return (
    <div>
      <h4>Cart Summary</h4>
      <p>Ordered Items: {cart.length}</p>
      <p>Menu Cost: {total}</p>
      <p>VAT : {VAT}</p>
      <p> Delivery Cost: {deliveryCost}</p>
      <p>SubTotal: {subTotal}</p>
      <Link to="/recieved">
        <button className="btn btn-outline-dark">Confirm Order</button>
      </Link>
    </div>
  );
};

export default Cart;
