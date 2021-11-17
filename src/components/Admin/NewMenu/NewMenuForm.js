import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "./../../Shared Components/Header/Header";

const NewMenuForm = () => {
  const { restaurantName } = useParams();
  const [menuName, setMenuName] = useState("");
  const [menuDescription, setMenuDescription] = useState("");
  const [menuPrice, setMenuPrice] = useState("");
  const [menuImage, setMenuImage] = useState("");

  const onChangeFile = (e) => {
    setMenuImage(e.target.files[0]);
  };

  //   console.log(restaurantImage);

  const newMenu = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("menuName", menuName);
    formData.append("menuDescription", menuDescription);
    formData.append("menuPrice", menuPrice);
    formData.append("menuImage", menuImage);
    formData.append("restaurantName", restaurantName);

    axios
      .post("http://localhost:3030/api/addMenu", formData, {})
      .then((res) => {
        console.log(res);
      })
      .then((window.location.href = "/"));
  };

  return (
    <section>
      <Header />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6 mx-5">
            <h6 className="text-center mb-5">
              Add New Menu To{"    "}
              <br />
              <span className="h2 text-primary">{restaurantName}</span>
            </h6>
            <form onSubmit={newMenu} enctype="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Menu Name</label> <br />
                <input
                  value={menuName}
                  className="form-control"
                  type="text"
                  name="menuName"
                  onChange={(e) => setMenuName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Menu Description</label> <br />
                <input
                  value={menuDescription}
                  className="form-control"
                  type="text"
                  name="menuDescription"
                  onChange={(e) => setMenuDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Menu Price</label> <br />
                <input
                  value={menuPrice}
                  className="form-control"
                  type="text"
                  name="menuPrice"
                  onChange={(e) => setMenuPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="file" className="form-label">
                  Menu Image
                </label>{" "}
                <br />
                <input
                  className="form-control-file"
                  type="file"
                  filename="menuImage"
                  onChange={onChangeFile}
                />
              </div>

              <button type="submit" className="btn btn-outline-dark">
                {" "}
                Store in Database and Display
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewMenuForm;
