import React, { useEffect, useState } from "react";
import ProductData from "./ProductData";
import "./User.css";
import BookingData from "./BookingData";

import Pagination from "./Pagination";
import Createbooking from "./Createbooking";

const Api = "http://localhost:8080/gantavyaAdmin/booking/fetchAllBooking";
const PAGE_SIZE = 5;

function Booking() {
  const [booking, setBooking] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProducts = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBooking(data.searchedDataList);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts(Api);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const filteredList = booking.filter(
    (booking) =>
      booking.paymentStatus &&
      (searchQuery === "" ||
        booking.paymentStatus.toUpperCase() === searchQuery.toUpperCase())
  );

  const totalPages = Math.ceil(filteredList.length / PAGE_SIZE);
  const indexOfLastProduct = currentPage * PAGE_SIZE;
  const indexOfFirstProduct = indexOfLastProduct - PAGE_SIZE;
  const currentProducts = filteredList.slice(
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
          <input
            type="text"
            placeholder="Search by Payment Status"
            value={searchQuery}
            onChange={handleSearch}
            id="myInput"
          />
          {currentProducts.length > 0 ? (
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
          ) : (
            <div>No records found</div>
          )}
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
