import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import Cart from "../../OrderComponents/Cart/Cart";
import Header from "../../Shared Components/Header/Header";
import Cart from "./../../OrderComponents/Cart/Cart";
import DisplayMenusForm from "./DisplayMenusForm";

const DisplayMenus = () => {
  const { restaurantName } = useParams();
  const [menus, setMenus] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // console.log(cart);

  const handleAddMenu = (menu) => {
    const exist = cartItems.find((x) => x._id === menu._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === menu._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...menu, qty: 1 }]);
    }
  };
  const handleRemoveMenu = (menu) => {
    const exist = cartItems.find((x) => x._id === menu._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== menu._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === menu._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

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
              <DisplayMenusForm
                menu={menu}
                key={menu._id}
                handleAddMenu={handleAddMenu}
              />
            ))}
          </div>
          <div className="col-md-4">
            <Cart
              handleAddMenu={handleAddMenu}
              handleRemoveMenu={handleRemoveMenu}
              cartItems={cartItems}
            ></Cart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayMenus;
