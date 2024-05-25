import React, { useEffect, useState } from "react";
import ProductData from "./ProductData";
import "./User.css";
import VehicleDetails from "./CreateVehicle";
import Pagination from "./Pagination";

const Api = "http://localhost:8080/gantavyaAdmin/vehicle/fetchAllVehicle";
const PAGE_SIZE = 5;

function Vehicles() {
  const [searchedDataList, setSearchedDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); 
  };

  const filteredList = searchedDataList.filter(
    (vehicle) =>
      vehicle.modelName &&
      (searchQuery === "" ||
        vehicle.modelName.toUpperCase() === searchQuery.toUpperCase())
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
        <VehicleDetails onCancel={onCancel} />
      ) : (
        <div className="table-container">
          <div className="button-div">
            <h2 className="left">Vehicles</h2>
            <button className="create-button" onClick={toggleModal}>
              Create
            </button>
          </div>
          <input
            type="text"
            placeholder="Search Vehicles by Model name"
            value={searchQuery}
            onChange={handleSearch}
            id="myInput"
          />
          {currentProducts.length > 0 ? (
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

export default Vehicles;
