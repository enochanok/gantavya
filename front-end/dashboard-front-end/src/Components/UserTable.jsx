import React, { useEffect, useState } from "react";
import "./User.css";
import UserData from "./UserData";
import Pagination from "./Pagination";
import CreateUser from "./CreateUser";

const Api = "http://localhost:3000/userdata";
const PAGE_SIZE = 5;

function UserTable() {
  const [userlist, setuserlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const fetchVehicles = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setuserlist(data.users);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchVehicles(Api);
  }, []);

  const totalPages = Math.ceil(userlist.length / PAGE_SIZE);
  const indexOfLastVehicle = currentPage * PAGE_SIZE;
  const indexOfFirstVehicle = indexOfLastVehicle - PAGE_SIZE;
  const currentVehicles = userlist.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <CreateUser onclose={closeModal} />
      ) : (
        <div className="table-container">
          <div className="button-div">
            <h2 className="left">Users</h2>
            <button className="create-button" onClick={toggleModal}>
              Create
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentVehicles.map((user) => (
                <UserData key={user.id} user={user} />
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

export default UserTable;
