import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const DisplayMenusForm = (props) => {
  // console.log(props);
  const { menuName, menuPrice, menuDescription, menuImage } = props.menu;
  return (
    <div className="border p-3 d-flex mb-3">
      <div className="">
        <h5 className="card-title">{menuName}</h5>
        <p className="card-text">{menuDescription}</p>
        <p className="card-text">{menuPrice}</p>
        <button
          className="btn btn-outline-dark"
          onClick={() => props.handleAddMenu(props.menu)}
        >
          <FaShoppingCart
            size="1.4rem"
            style={{ marginRight: "5px", marginBottom: "3px" }}
          />
          Add to Cart
        </button>
      </div>
      <img className="img-fluid w-25 h-25" src={menuImage} alt="Card cap" />
    </div>
  );
};

export default DisplayMenusForm;
