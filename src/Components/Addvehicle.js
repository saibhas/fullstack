import React, { useEffect, useState } from "react";
import AdminService from "../Service/Adminservice";
import { useNavigate } from "react-router-dom";
import Text from "./Text";

function Addvehicle() {
  const navigate = useNavigate();
  const vehicleID = window.location.pathname.split("/")[2];

  const [data, setdata] = useState({
    name: "",
    registrationNumber: "",
    seatingapacity: "",
    farePerKM: "",
    type: "",
  });
  useEffect(() => {
    if (vehicleID) {
      AdminService.getVehicelById(vehicleID).then((res) => {
        setdata({
          name: res.name,
          registrationNumber: res.registrationNumber,
          seatingapacity: res.seatingapacity,
          farePerKM: res.farePerKM,
          type: res.type,
          vehicleID: res.vehicleID,
        });
      });
    }
  }, [vehicleID]);

  const handlechange = (e) => {
    setdata({ ...data, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (vehicleID) {
      AdminService.putVehicle(data).then((res) => {
        alert("Vehicle is Updated");
        navigate("/vehiclelist");
      });
    } else {
      AdminService.postVehicle(data).then((res) => {
        alert("Vehicle is Added");
        navigate("/vehiclelist");
      });
    }
  };
  console.log(data);
  return (
    <div>
      <Text cls='text' text='Sundara Travels'/>
    <div className="addvehicle-con">
      <h1>{vehicleID ? "EditVehicle" : "AddVehicle"}</h1>
      <form className="addvehicle-form" onSubmit={handleSubmit}>
        <label className="addvehicle-lable">Vehicle-Name</label>
        <input
        className="addvehicle-input"
          type="text"
          onChange={handlechange}
          id="name"
          required
          value={data.name}
        />
        <br />
        <label className="addvehicle-lable">Vehicle-Rg-No</label>
        <input
         className="addvehicle-input"
          type="text"
          onChange={handlechange}
          id="registrationNumber"
          required
          value={data.registrationNumber}
        />
        <br />
        <label className="addvehicle-lable">Vehicle-Capacity</label>
        <input
         className="addvehicle-input"
          type="text"
          onChange={handlechange}
          id="seatingapacity"
          required
          value={data.seatingapacity}
        />
        <br />
        <label className="addvehicle-lable">Vehicle-Fare/Km</label>
        <input
         className="addvehicle-input"
          type="text"
          onChange={handlechange}
          id="farePerKM"
          required
          value={data.farePerKM}
        />
        <br />
        <label className="addvehicle-lable">Vehicle-Type</label>
        <input
         className="addvehicle-input"
          type="text"
          onChange={handlechange}
          id="type"
          required
          value={data.type}
        />
        <br />
        <button className="addvehicle-button1" type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Addvehicle;
