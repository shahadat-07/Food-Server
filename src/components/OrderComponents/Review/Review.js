import React, { useEffect, useState } from "react";
import ReviewForm from "../../OrderComponents/Review/ReviewForm";
import Header from "../../Shared Components/Header/Header";
import Footer from "./../../Shared Components/Footer/Footer";
import ReviewTable from "./ReviewTable";

const Review = () => {
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems);

  useEffect(() => {
    const data = localStorage.getItem("cartItems");
    const items = JSON.parse(data);
    setCartItems(items);
  }, []);

  return (
    <section>
      <Header />
      <div className="container mt-5">
        <h3 className="text-center my-4">Final Overview</h3>
        <div className="row mt-5">
          <div className="col-md-7">
            <h4 className="mb-4">Cart Content</h4>
            {cartItems.map((menu) => (
              <ReviewForm key={menu._id} menu={menu} />
            ))}
          </div>
          <div className="col-md-5">
            <h4 className="mb-4">Cart Summary</h4> <ReviewTable />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Review;
