import React, { useEffect, useState } from "react";

import "./ProductData";
import axios from "axios";

function BookingData({ booking }) {
  const [editId, setEditID] = useState(-1);
  const [userId, setUserId] = useState(booking.userId || "");
  const [vehicleId, setvehicleId] = useState(booking.vehicleId || "");
  const [startDate, setstartDate] = useState(booking.startDate || "");
  const [endDate, setendDate] = useState(booking.endDate || "");
  const [bookingStatus, setBookingStatus] = useState(
    booking.bookingStatus || ""
  );
  const [paymentStatus, setPaymentStatus] = useState(
    booking.paymentStatus || ""
  );

  function handleEdit(id) {
    setEditID(id);
  }

  function handleUpdate() {
    const data = {
      userId: id,
      vehicleId: vehicleId,
      startDate: startDate,
      endDate: endDate,
      bookingStatus: bookingStatus,
      paymentStatus: paymentStatus,
    };

    const jsonData = JSON.stringify(data);
    axios
      .post(
        "http://localhost:8080/gantavyaAdmin/booking/modifybookingDetail",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("PUT request successful:", response);

        setEditID(-1);
      })
      .catch((error) => {
        console.log(jsonData);
        console.error("Error making PUT request:", error);
      });
    setEditID(-1);
    location.reload();
  }

  return (
    <>
      {booking.userId === editId ? (
        <tr>
          <td>{booking.id}</td>
          <td>
            <input
              type="text"
              value={vehicleId}
              onChange={(e) => setvehicleId(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>
          <td>
            <input
              type="text"
              value={startDate}
              onChange={(e) => setstartDate(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>

          <td>
            <input
              type="text"
              value={endDate}
              onChange={(e) => setendDate(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>

          <td>
            <input
              type="date"
              value={bookingStatus}
              onChange={(e) => setBookingStatus(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>

          <td>
            <input
              type="date"
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>

          <td>
            <button
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                cursor: "pointer",
                padding: "10px 20px",
                margin: "0 5px",
                borderRadius: "5px",
                transition: "background-color 0.3s",
              }}
              onClick={handleUpdate}
            >
              Update
            </button>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{booking.userId}</td>
          <td>{booking.vehicleId}</td>
          <td>{booking.startDate}</td>
          <td>{booking.endDate}</td>
          <td>{booking.bookingStatus}</td>
          <td>{booking.paymentStatus}</td>

          <td className="td-container">
            <button>view</button>
            <button onClick={() => handleEdit(booking.id)}>Edit</button>
          </td>
        </tr>
      )}
    </>
  );
}

export default BookingData;
