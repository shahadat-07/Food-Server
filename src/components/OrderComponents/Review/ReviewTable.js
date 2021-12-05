import React, { useEffect, useState } from "react";

const ReviewTable = () => {
  const [totalPrice, setTotalPrice] = useState("");
  const [userName, setUserName] = useState("");
  const [orderedItems, setOderedItems] = useState([]);

  useEffect(() => {
    const totalPrice = localStorage.getItem("totalPrice");
    setTotalPrice(totalPrice);
    // const userData = localStorage.getItem("currentLoggedIn");
    // const userDetails = JSON.parse(userData);
    // setUser(userDetails);
    const data = localStorage.getItem("cartItems");
    const orderedItems = JSON.parse(data);
    setOderedItems(orderedItems);
  }, []);

  const handlePayment = async () => {
    const addressInfo = document.getElementById("address");
    var address = addressInfo.options[addressInfo.selectedIndex].text;
    console.log(address);

    const result = await fetch("http://localhost:3030/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderedItems,
        userName,
        address,
      }),
    }).then((res) => res.json());
    console.log(result.message);
    setTimeout(function () {
      alert("Payment Done Successfully");
      window.location.href = "/preparing";
    }, 1000);
  };

  return (
    <section className="card p-4">
      <form>
        <div class="form-group">
          <label for="">Total Price</label>
          <input
            type="text"
            class="form-control mb-3"
            value={`$ ${totalPrice}`}
            id=""
          />
        </div>
        <div class="form-group">
          <label for="">User Name</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            class="form-control mb-3"
            value={userName}
          />
        </div>
        <div>
          <label for="">Address</label>
          <select
            id="address"
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option defaultValue></option>
            <option value="1">Helsinki, Uusimaa</option>
            <option value="2">Espoo, Uusimaa</option>
            <option value="3">Tampere, Pirkanmaa</option>
            <option value="4">Vantaa, Uusimaa </option>
            <option value="5">Turku, Southwest Finland</option>
            <option value="6">Oulu, North Ostrobothnia</option>
          </select>
        </div>
        <div class="form-group">
          <label for="">Card Holder Name</label>
          <input type="text" class="form-control mb-3" id="" />
        </div>
        <div class="form-group">
          <label for="">Credit Card Number</label>
          <input
            type="number"
            class="form-control mb-3"
            id="exampleInputEmail1"
          />
        </div>
        <div className="d-flex justify-content-between">
          <div class="form-group">
            <label for="">Expiration Month</label>
            <input
              type="number"
              class="form-control mb-3"
              id="exampleInputEmail1"
            />
          </div>
          <div class="form-group">
            <label for="">Expiration Year</label>
            <input
              type="number"
              class="form-control mb-3"
              id="exampleInputEmail1"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="">CVC</label>
          <input
            type="number"
            class="form-control mb-3"
            id="exampleInputEmail1"
          />
        </div>
      </form>
      <div className="row">
        <button
          onClick={handlePayment}
          className="btn btn-outline-dark"
          type="button"
        >
          Pay Now
        </button>
      </div>
    </section>
  );
};

export default ReviewTable;
