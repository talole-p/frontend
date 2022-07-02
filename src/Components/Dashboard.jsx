import React, { useState } from "react";
import axios from "axios";
import { RESPONSE_STATUS } from "../constant/response-status";
import { MESSAGES } from "../constant/msg";
import Loader from "./loader";
import { token } from "../common/common";

const Dashboard = () => {
  const res = token()
  if (!res) {
    window.alert(MESSAGES.COMMON.REGISTER_FIRST);
  }
  const [NewUrl, setUrl] = useState({
    email: "",
  });
  const inputhandel = (e) => {
    setUrl({ ...NewUrl, [e.target.name]: e.target.value });
  };
  const postReq = async (e) => {
    e.preventDefault();
    JSON.stringify(NewUrl);
    axios
      .post("http://35.154.204.127/api/shortcode", NewUrl)
      .then((res) => {
        console.log(res);
        console.log(NewUrl);
        if (res.data.message === MESSAGES.COMMON.URL_ALREADY_EXIST) {
          window.alert(MESSAGES.COMMON.URL_ALREADY_EXIST_USE_ANOTHER);
        }
        if (res.data.message === MESSAGES.COMMON.SHORT_CODE_ALREADY_EXIST) {
          window.alert(MESSAGES.COMMON.SHORT_CODE_ALREADY_EXIST_USE_ANOTHER);
        }
        if (
          res?.data?.status === RESPONSE_STATUS.SUCCESS &&
          res?.data?.message !== MESSAGES.COMMON.URL_ALREADY_EXIST &&
         (res?.data?.message !== MESSAGES.COMMON.SHORT_CODE_ALREADY_EXIST)
        ) {
          window.alert(`Your Shortcode ${res?.data?.data || 'show you later'}`);
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert("Registration error");
      });
  };
  return ( !res ? <Loader/>:
    <>
      <div className="container-fluid">
        <div className=" row">
          <div className="col-xl-12 col-lg-12 col-xxl-12 col-md-12 col-sm-12 col-12">
            <form method="POST" onSubmit={postReq}>
              <div className="form-group">
                <label for="formGroupExampleInput">Full URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Here URL"
                  value={NewUrl.url}
                  name="url"
                  onChange={inputhandel}
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">Short Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="custom code (optionl)"
                  value={NewUrl.code}
                  name="code"
                  onChange={inputhandel}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Short Code
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
