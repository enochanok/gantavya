import React, { useEffect, useState } from "react";
import ProductData from "./ProductData";
import "./User.css";
import VehicleDetails from "./CreateVehicle";
import Pagination from "./Pagination";

const Api = "http://localhost:8080/gantavyaAdmin/vehicle/fetchAllVehicle";
const PAGE_SIZE = 5;

function Users({}) {
  const [searchedDataList, setSearchedDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const fetchProducts = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setSearchedDataList(data.searchedDataList);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts(Api);
  }, []);

  const totalPages = Math.ceil(searchedDataList.length / PAGE_SIZE);
  const indexOfLastProduct = currentPage * PAGE_SIZE;
  const indexOfFirstProduct = indexOfLastProduct - PAGE_SIZE;
  const currentProducts = searchedDataList.slice(
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
        <VehicleDetails onCancel={onCancel} />
      ) : (
        <div className="table-container">
          <div className="button-div">
            <h2 className="left">vehicles</h2>
            <button className="create-button" onClick={toggleModal}>
              Create
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Model name</th>
                <th>Vehicle type</th>
                <th>Number plate</th>
                <th>Seat</th>
                <th>Door</th>
                <th>Luggage</th>
                <th>Fuel type</th>
                <th>Day price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <ProductData key={product.id} product={product} />
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

export default Users;
