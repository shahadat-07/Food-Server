import React from "react";

const OrderView = (props) => {
  const order = props.order;
  const cart = order.cart;
  const id = order._id;
  // console.log(cart);

  const handleDelete = () => {
    fetch(`http://localhost:3030/api/findAndDelete/${id}`).then((res) =>
      res.json()
    );
    alert("Successfully Removed");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  const handleRecieve = () => {
    fetch(`http://localhost:3030/api/findAndDelete/${id}`).then((res) =>
      res.json()
    );
    alert("Order Recieved");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <section>
      <div className="card p-3 mb-3">
        <div>
          <p>
            Order Creator : <span className="h5">{order.userName}</span>
          </p>
          <p>
            Delivery Address : <span className="h5">{order.address}</span>
          </p>
        </div>
        <div className="mb-4">
          <button className="btn btn-success" onClick={handleRecieve}>
            Recieve Order
          </button>
          <button className="btn btn-danger mx-3" onClick={handleDelete}>
            Delete Order
          </button>
        </div>
        <h5>Ordered Items</h5>
        <br />
        {cart.map((menu) => (
          <div className="border p-2 d-flex mb-3 justify-content-between">
            <div className="">
              <h5 className="card-title">{menu.menuName}</h5>
              <p className="card-text">{menu.menuDescription}</p>
            </div>
            <img
              className="img-fluid w-25 h-25"
              src={menu.menuImage}
              alt="Card cap"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderView;
