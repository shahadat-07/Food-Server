import React, { useEffect, useState } from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import OrderView from "./OrderView";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch(`http://localhost:3030/api/allOrders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <secton>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-6">
            {orders.length > 1 ? (
              <div>
                <h2 className="text-center my-3">New Orderes Arrived! </h2>
                <h3 className="text-center my-3">Total : {orders.length} </h3>
              </div>
            ) : (
              <h2 className="text-center my-3">No Order Arrived! </h2>
            )}

            {orders.map((order) => (
              <OrderView order={order}></OrderView>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </secton>
  );
};

export default Admin;
