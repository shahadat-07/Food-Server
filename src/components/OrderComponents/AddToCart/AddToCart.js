import $ from "jquery";
import React, { useState } from "react";
// import "./AddToCart.css";

const AddToCart = () => {
  const [quantity, setQuantity] = useState("");
  $(document).ready(function () {
    /* Set rates + misc */
    var taxRate = 0.05;
    var shippingRate = 10.0;
    var fadeTime = 300;

    /* Assign actions */
    $(".product-quantity input").change(function () {
      updateQuantity(this);
    });

    $(".product-removal button").click(function () {
      removeItem(this);
    });

    /* Recalculate cart */
    function recalculateCart() {
      var subtotal = 0;

      /* Sum up row totals */
      $(".product").each(function () {
        subtotal += parseFloat($(this).children(".product-line-price").text());
      });

      /* Calculate totals */
      var tax = subtotal * taxRate;
      var shipping = subtotal > 0 ? shippingRate : 0;
      var total = subtotal + tax + shipping;

      /* Update totals display */
      $(".totals-value").fadeOut(fadeTime, function () {
        $("#cart-subtotal").html(subtotal.toFixed(2));
        $("#cart-tax").html(tax.toFixed(2));
        $("#cart-shipping").html(shipping.toFixed(2));
        $("#cart-total").html(total.toFixed(2));
        if (total == 0) {
          $(".checkout").fadeOut(fadeTime);
        } else {
          $(".checkout").fadeIn(fadeTime);
        }
        $(".totals-value").fadeIn(fadeTime);
      });
    }

    /* Update quantity */
    function updateQuantity(quantityInput) {
      /* Calculate line price */
      var productRow = $(quantityInput).parent().parent();
      var price = parseFloat(productRow.children(".product-price").text());
      var quantity = $(quantityInput).val();
      var linePrice = price * quantity;

      /* Update line price display and recalc cart totals */
      productRow.children(".product-line-price").each(function () {
        $(this).fadeOut(fadeTime, function () {
          $(this).text(linePrice.toFixed(2));
          recalculateCart();
          $(this).fadeIn(fadeTime);
        });
      });
    }

    /* Remove item from cart */
    function removeItem(removeButton) {
      /* Remove row from DOM and recalc cart total */
      var productRow = $(removeButton).parent().parent();
      productRow.slideUp(fadeTime, function () {
        productRow.remove();
        recalculateCart();
      });
    }
  });

  return (
    <section className="card p-3">
      <div className="">
        {/* <div className="">
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div> */}

        <div className="product card">
          <div className="product-title card-title">
            Nike Flex Form TR Women's Sneaker
          </div>
          <div className="product-price">10</div>
          <div className="product-quantity">
            <input
              className="form-control"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="product-removal">
            <button className="btn btn-outline-danger">Remove</button>
          </div>
          <div className="product-line-price">0</div>
        </div>

        <div className="totals mt-5">
          <div className="totals-item d-flex justify-content-between border p-2">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">
              0
            </div>
          </div>
          <div className="totals-item d-flex justify-content-between border p-2">
            <label>Tax (5%)</label>
            <div className="totals-value" id="cart-tax">
              0
            </div>
          </div>
          <div className="totals-item d-flex justify-content-between border p-2">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">
              0
            </div>
          </div>
          <div className="totals-item d-flex justify-content-between border p-2 totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">
              0
            </div>
          </div>
        </div>

        <button className="btn btn-outline-dark mt-3">Checkout</button>
      </div>
    </section>
  );
};

export default AddToCart;
