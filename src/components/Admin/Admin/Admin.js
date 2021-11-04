import React from "react";
import AdminHeader from "../AdminHeader/Header";
import NewRestaurant from "../NewRestaurant/NewRestaurant";

const Admin = () => {
  return (
    <div className="container">
      <AdminHeader />
      <NewRestaurant />
    </div>
  );
};

export default Admin;
