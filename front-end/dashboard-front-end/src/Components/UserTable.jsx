import React, { useEffect, useState } from "react";
import "./User.css";
import UserData from "./UserData";
import Pagination from "./Pagination";
import CreateUser from "./CreateUser";
import SearchIcon from "@mui/icons-material/Search";

const Api = "http://localhost:8080/gantavyaAdmin/user/fetchAllUser";
const PAGE_SIZE = 5;

function UserTable() {
  const [userlist, setUserlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUserlist(data.data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(Api);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredUsers = userlist.filter((user) => {
    if (searchQuery === "") return true;
    const upperCaseQuery = searchQuery.toUpperCase();
    return (
        (user.full_name &&
            user.full_name.toUpperCase().includes(upperCaseQuery)) ||
        (user.email && user.email.toUpperCase().includes(upperCaseQuery)) ||
        (user.phone_number &&
            user.phone_number.toUpperCase().includes(upperCaseQuery))
    );
  });

  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);
  const indexOfLastUser = currentPage * PAGE_SIZE;
  const indexOfFirstUser = indexOfLastUser - PAGE_SIZE;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

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
              <input
                  type="text"
                  placeholder="Search users by name, email or phone number"
                  value={searchQuery}
                  onChange={handleSearch}
                  id="myInput"
              />
              {currentUsers.length > 0 ? (
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
                    {currentUsers.map((user) => (
                        <UserData key={user.id} user={user} />
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

export default UserTable;