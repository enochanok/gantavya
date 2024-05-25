import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./ProductData.css";
import axios from "axios";

function ProductData({ product }) {
  const [editId, setEditID] = useState(-1);
  const [modelName, setModelName] = useState(product.modelName || "");
  const [vehicleType, setVehicleType] = useState(product.vehicleType || "");
  const [fuelType, setFuelType] = useState(product.fuelType || "");
  const [dayPrice, setDayPrice] = useState(product.dayPrice || "");
  const [door, setDoor] = useState(product.door || "");
  const [seat, setSeat] = useState(product.seat || "");
  const [numberPlate, setNumberPlate] = useState(product.numberPlate || "");
  const [luggage, setLuggage] = useState(product.luggage || "");
  const [id, setId] = useState(product.id || "");

  function handleEdit(id) {
    setEditID(id);
  }
 
  function handleUpdate() {
    const data = {
      id: id,
      model_name: modelName,
      vehicle_type: vehicleType,
      fuel_type: fuelType,
      day_price: dayPrice,
      door: door,
      seat: seat,
      number_plate: numberPlate,
      luggage: luggage,
    };

    const jsonData = JSON.stringify(data);
    axios
      .post(
        "http://localhost:8080/gantavyaAdmin/vehicle/modifyVehicle",
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
      {product.id === editId ? (
        <tr>
          <td>{product.id}</td>
          <td>
            <input
              type="text"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>
          <td>
            <input
              type="text"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>
          <td>
            <input
              type="text"
              value={numberPlate}
              onChange={(e) => setNumberPlate(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>
          <td>
            <input
              type="text"
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>
          <td>
            <input
              type="text"
              value={door}
              onChange={(e) => setDoor(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>
          <td>
            <input
              type="text"
              value={luggage}
              onChange={(e) => setLuggage(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>
          <td>
            <input
              type="text"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              style={{ width: "100%", margin: 0, padding: 0 }}
            />
          </td>
          <td>
            <input
              type="text"
              value={dayPrice}
              onChange={(e) => setDayPrice(e.target.value)}
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
          <td>{product.id}</td>
          <td>{product.modelName}</td>
          <td>{product.vehicleType}</td>
          <td>{product.numberPlate}</td>
          <td>{product.seat}</td>
          <td>{product.door}</td>
          <td>{product.luggage}</td>
          <td>{product.fuelType}</td>
          <td>{product.dayPrice}</td>
          <td className="td-container">
            <button>view</button>
            <button onClick={() => handleEdit(product.id)}>Edit</button>
          </td>
        </tr>
      )}
    </>
  );
}

export default ProductData;
