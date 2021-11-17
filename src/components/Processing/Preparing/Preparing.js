import React from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";

const Preparing = () => {
  setTimeout(function () {
    window.location.href = "/readyForDelivery";
  }, 5000);

  return (
    <section>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3 className="text-center">We are Preparing your food</h3>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Preparing;
