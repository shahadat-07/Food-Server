import React from "react";

const DisplayMenusForm = (props) => {
  console.log(props.menu);
  const { menuName, menuPrice, menuDescription, menuImage } = props.menu;
  return (
    <div className="border p-3 d-flex mb-3">
      <div className="">
        <h5 className="card-title">{menuName}</h5>
        <p className="card-text">{menuDescription}</p>
        <p className="card-text">{menuPrice}</p>
        <a href="#" className="btn btn-outline-dark">
          Add to Cart
        </a>
      </div>
      <img className="img-fluid w-25 h-25" src={menuImage} alt="Card cap" />
    </div>
  );
};

export default DisplayMenusForm;
