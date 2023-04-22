import React, { useEffect, useState } from "react";
import AdminService from "../Service/Adminservice";
import { useNavigate } from "react-router-dom";
import Text from "./Text";

function Login() {
  const [userId, setuserId] = useState();
  const [password, setpassword] = useState();
  const [submit, setsubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (submit) {
      AdminService.getLogin(userId, password).then((res) => {
        // alert(res);
        if (res === true) {
          AdminService.getusrById(userId).then((res) => {
            if (res.userType === "C") {
              navigate(`/booking/${userId}`);
            } else if (res.userType === "A") {
              navigate(`/routeList`);
            }
          });
        } else if (res === false) {
          alert("Sign up first");
          setsubmit(false);
          alert("Sign up first");
          navigate(`/addprofile`);
        }
      });
    }
  }, [submit, userId, password, navigate]);

  // useEffect(() => {

  // }, [])

  const handleuser = (e) => {
    setuserId(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setsubmit(true);
  };
  return (
    <div>
      <Text cls='text' text='Sundara Travels'/>
      <div className="login-container">
      <form className="login-form" onSubmit={handlesubmit}>
        <label className="label-login">UserName</label>
        <input className="login-input" type="text" onChange={handleuser} />
        <label className="label-login">Password</label>
        <input className="login-input" type="password" onChange={handlepassword} />
        <button className="login-button" type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
