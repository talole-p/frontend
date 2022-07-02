import React, { useState } from "react";
import axios from "axios";
import { RESPONSE_STATUS } from "../constant/response-status";
import { MESSAGES } from "../constant/msg";
const Registration = () => {
  const [NewReg, setReg] = useState({
    email: "",
  });
  const inputhandel = (e) => {
    setReg({ ...NewReg, [e.target.name]: e.target.value });
  };
  const sendplz = async (e) => {
    e.preventDefault();
    JSON.stringify(NewReg);
    axios
      .post("http://35.154.204.127/api/registration", NewReg)
      .then((res) => {
        if (res?.data?.message === MESSAGES.COMMON.EMAIL_ALREADY_EXIST) {
          window.alert(MESSAGES.COMMON.EMAIL_ALREADY_EXIST_USE_ANOTHER_EMAIL);
        }
        if (
          res?.data?.status === RESPONSE_STATUS.SUCCESS &&
          res?.data?.message !== MESSAGES.COMMON.EMAIL_ALREADY_EXIST
          && ( res?.data?.data)
        ) {
          window.alert("Registration successfully");
          localStorage.setItem('itemName',res?.data?.data?.token)
          localStorage.setItem('visit',0)
          window.location = "/dashboard";
          
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert("Registration error");
      });
  };
  return (
    <>
      <div className="container-fluid">
        <div className=" row">
          <div className="col-xl-12 col-lg-12 col-xxl-12 col-md-12 col-sm-12 col-12">
            <form method="POST" onSubmit={sendplz}>
              <div className="form-group mt-5">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={NewReg.email}
                  name="email"
                  onChange={inputhandel}
                />
                <small id="emailHelp" className="form-text text-muted">
                  {" "}
                  Enter email to sign up
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
