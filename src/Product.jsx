import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import "./Product.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function Product({ title, img, price, offer, orderInfo, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className="modal">
          <div className="modal-hero">
            <HighlightOffIcon
              className="modal-closebtn"
              onClick={(e) => setOpen(false)}
            />
            <div className="person-info">
              <h1>Details about the customer </h1>
              <p className="userName">
                <span>UserName:</span> {orderInfo.userName}
              </p>
              <p className="email">
                <span>Email:</span> {orderInfo.email}
              </p>
              <p className="totalPay">
                <span>Total Amount:</span> ₹{orderInfo.deliveryCharge + price}
              </p>
              <p className="deliveryCharge">
                <span>Delivery Charge:</span> ₹{orderInfo.deliveryCharge}
              </p>
              <p className="payment">
                <span>Payment Method:</span> {orderInfo.paymentMethod}
              </p>
              <p className="location">
                <span>Location:</span> {orderInfo.location}
              </p>
              <p className="date">
                <span>Ordered On:</span> {orderInfo.orderedOn}
              </p>
            </div>
            <div className="modal-product-info">
              <img src={img} alt={title} className="modal-img" />
              <p className="modal-title">{title}</p>
              <p className="modal-desc">{desc}</p>
            </div>
          </div>
        </div>
      </Modal>
      <div className="product">
        <img src={img} alt={title} />
        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <p>
            <strong className="product-price">₹ {price}</strong>
            <span className="product-offer">{offer}%</span>
          </p>
          <p className="product-orderedOn">Ordered On: {orderInfo.orderedOn}</p>
          <p className="product-person">Ordered By: {orderInfo.userName}</p>
          <button className="product-button" onClick={(e) => setOpen(true)}>
            Know More
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
