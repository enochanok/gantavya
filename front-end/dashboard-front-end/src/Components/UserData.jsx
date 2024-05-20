import React, { useEffect, useState } from "react";

import "./ProductData";
import axios from "axios";

function UserData({ user }) {
  const [editId, setEditID] = useState(-1);
  const [fullName, setfullName] = useState(user.fullName || "");
  const [email, setemail] = useState(user.email || "");
  const [phone, setphone] = useState(user.phone || "");

  function handleEdit(id) {
    setEditID(id);
  }

  function handleUpdate() {
    const data = {
      id: id,
      full_name: fullName,
      email: email,
      phone_number: phone,
    };

    const jsonData = JSON.stringify(data);
    axios
      .post(
        "http://localhost:8080/gantavyaAdmin/user/modifyUserDetail",
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
      {user.id === editId ? (
        <tr>
          <td>{user.id}</td>
          <td>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>
          <td>
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>

          <td>
            <input
              type="text"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
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
          <td>{user.id}</td>
          <td>{user.full_name}</td>
          <td>{user.email}</td>
          <td>{user.phone_number}</td>

          <td className="td-container">
            <button>view</button>
            <button onClick={() => handleEdit(user.id)}>Edit</button>
          </td>
        </tr>
      )}
    </>
  );
}

export default UserData;
