import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cartItems, handleAddMenu, handleRemoveMenu } = props;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  const menusPrice = cartItems.reduce((a, c) => a + c.qty * c.menuPrice, 0);
  const taxPrice = menusPrice * 0.14;
  const shippingPrice = menusPrice > 500 ? 0 : 20;
  const totalPrice = menusPrice + taxPrice + shippingPrice;
  localStorage.setItem("totalPrice", totalPrice);

  return (
    <section>
      <div className="bg-dark text-center">
        <h4 className="mb-4 text-white py-2">Cart Items</h4>
      </div>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item._id} className="row mb-3">
          <div className="col-4">{item.menuName}</div>
          <div className="col-4">
            <button
              className="btn btn-success mx-2"
              onClick={() => handleAddMenu(item)}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveMenu(item)}
            >
              -
            </button>
          </div>
          <div className="col-4 text-right">
            {item.qty} x ${item.menuPrice.toFixed(2)}
          </div>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-8">Menus Price</div>
            <div className="col-4 text-right">${menusPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-8">Tax Price</div>
            <div className="col-4 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-8">Shipping Price</div>
            <div className="col-4 text-right">${shippingPrice.toFixed(2)}</div>
          </div>

          <div className="row">
            <div className="col-8">
              <strong>Total Price</strong>
            </div>
            <div className="col-4 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <div className="row my-2">
            <small>
              We will serve the food free for you if menuPrices are over $500
            </small>
          </div>
          <hr />
          <div className="row">
            <Link to={`/review/`}>
              <button className="btn btn-success">Review Cart</button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
