import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./loader";
import { MESSAGES } from "../constant/msg";
import { token,count } from "../common/common";


const Short = () => {
  const [newArray, setArray] = useState([]);
  const [isLoading, setIsLoading] = useState([])
  const res =token()
  useEffect(() => {
    axios
      .get("http://35.154.204.127/api/shortcode")
      .then((res) => {
        setArray(res?.data?.data);
        setIsLoading(false)
          const newRes =  count()
          if (newRes) {
            window.alert(`${newRes} time visit here`) 
          }
         const newToken = token()
          if (!newToken) {
            window.alert(MESSAGES.COMMON.REGISTER_FIRST);
          }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (!res||isLoading ? <Loader/>: 
    <>
   
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">URL</th>
            <th scope="col">SHORT CODE</th>
          </tr>
        </thead>
        {newArray.map((val,i) => {
          return (
            <tbody>
              <tr key={i}>
                <th>{val._id}</th>
                <td>{val.url}</td>   
                <td>{val.shortcode}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Short;
