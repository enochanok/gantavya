import React, { useEffect, useState } from "react";
import ProductData from "./ProductData";
import "./User.css";
import BookingData from "./BookingData";

import Pagination from "./Pagination";
import Createbooking from "./Createbooking";

const Api = "http://localhost:3000/bookinginfo";
const PAGE_SIZE = 5;

function Booking() {
  const [booking, setbooking] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const fetchProducts = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setbooking(data.booking);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts(Api);
  }, []);

  const totalPages = Math.ceil(booking.length / PAGE_SIZE);
  const indexOfLastProduct = currentPage * PAGE_SIZE;
  const indexOfFirstProduct = indexOfLastProduct - PAGE_SIZE;
  const currentProducts = booking.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onCancel = (cancel) => {
    setShowModal(cancel);
  };

  return (
    <>
      {showModal ? (
        <Createbooking onCancel={onCancel} />
      ) : (
        <div className="table-container">
          <div className="button-div">
            <h2 className="left">Bookings</h2>
            <button className="create-button" onClick={toggleModal}>
              Create
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>User Id</th>
                <th>Vehicle Id</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Booking Status</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((booking) => (
                <BookingData key={booking.vehicleId} booking={booking} />
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        </div>
      )}
    </>
  );
}

export default Booking;
