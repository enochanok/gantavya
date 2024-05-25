import React, { useState } from "react";
import "./LoginForm.css";

const PaymentForm = ({ onClose }) => {
  const [paymentMode, setpaymentMode] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setpaymentMode("");
      setAmount("");
      setRemarks("");
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="login-overlay" onClick={handleOverlayClick}>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login">
            <h2>Khalti</h2>
            <h3 onClick={onClose}>X</h3>
          </div>
          <div className="form-group">
            <label htmlFor="username">Payment Method:</label>
            <input
              type="text"
              id="paymethod"
              value={paymentMode}
              onChange={(e) => setpaymentMode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Amount:</label>
            <div className="password-input-container">
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Remarks:</label>
            <div className="password-input-container">
              <textarea
                style={{ width: "100%" }}
                type="text"
                rows={4}
                id="amount"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "row",
            }}
          >
            <button
              onClick={() =>
                (window.location.href =
                  "https://pay.khalti.com/?pidx=w2FSdzfrsVghJqNzhkVMeC")
              }
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                marginRight: "10px",
              }}
              type="submit"
            >
              Pay
            </button>
            <button
              onClick={onClose}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
              }}
              type="submit"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
