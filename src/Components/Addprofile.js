import React, { useState } from "react";
import CustomerService from "../Service/Customerservice";
import { useNavigate } from "react-router-dom";
import Text from "./Text";

function Addprofile() {
  const navigate = useNavigate();
  const [profile, setprofile] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    street: "",
    location: "",
    city: "",
    state: "",
    pincode: "",
    mobileNo: "",
    emailID: "",
    password: "",
    credentialBean: {
      userId: "",
      password: "",
      userType: "C",
      loginStatus: "True",
    },
  });

  const handlechange = (e) => {
    setprofile({ ...profile, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    CustomerService.Addprofile(profile).then((res) => {
      alert("Profile is added");
      navigate("/userlogin");
    });
  };
  return (
    <div>
      <Text cls='text' text='Sundara Travels'/>
      <div className="addprofile-con">
      <form className="addprofile-form" onSubmit={handleSubmit}>
        <label className="addprofile-lab">First Name</label>
        <input className="p-in" id="firstName" onChange={handlechange} required />
        <label className="addprofile-lab">last Name</label>
        <input className="p-in" id="lastName" onChange={handlechange} required />
        <label className="addprofile-lab">Date of Birth</label>
        <input className="p-in" id="dateOfBirth" onChange={handlechange} required />
        <label className="addprofile-lab">Gender</label>
        <input className="p-in" id="gender" onChange={handlechange} required />
        <label className="addprofile-lab">Street</label>
        <input className="p-in"  id="street" onChange={handlechange} required />
        <label className="addprofile-lab">Location</label>
        <input className="p-in" id="location" onChange={handlechange} required />
        <label className="addprofile-lab">City</label>
        <input className="p-in" id="city" onChange={handlechange} required />
        <label className="addprofile-lab">State</label>
        <input className="p-in" id="state" onChange={handlechange} required />
        <label className="addprofile-lab">Pincode</label>
        <input className="p-in" id="pincode" onChange={handlechange} required />
        <label className="addprofile-lab">Mobile No</label>
        <input className="p-in" id="mobileNo" onChange={handlechange} required />
        <label className="addprofile-lab">Email-ID</label>
        <input className="p-in" id="emailID" type="email" onChange={handlechange} required />
        <label className="addprofile-lab">UserName</label>
        <input
        className="p-in"
          id="userId"
          onChange={(e) => {
            setprofile({
              ...profile,
              credentialBean: {
                ...profile.credentialBean,
                [e.target.id]: e.target.value,
              },
            });
          }}
          required
        />
        <label className="addprofile-lab">Password</label>
        <input
        className="p-in"
          id="password"
          onChange={(e) => {
            setprofile({
              ...profile,
              credentialBean: {
                ...profile.credentialBean,
                [e.target.id]: e.target.value,
              },
            });
          }}
          required
        />
        <button className="addprofile-button" type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Addprofile;
