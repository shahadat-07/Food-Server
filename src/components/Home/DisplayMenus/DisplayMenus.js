import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../Shared Components/Header/Header";
import DisplayMenusForm from "./DisplayMenusForm";

const DisplayMenus = () => {
  const { restaurantName } = useParams();

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/api/allMenus/${restaurantName}`)
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
      });
  }, [restaurantName]);

  return (
    <section>
      <Header />
      <div className="container mt-5">
        <h4>
          Welcome To <span className="text-success">{restaurantName}</span>
        </h4>
        <div className="row mt-5">
          <div className="col-md-8">
            {menus.map((menu) => (
              <DisplayMenusForm menu={menu} />
            ))}
          </div>
          <div className="col-md-4">
            <h1>Cart</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayMenus;
