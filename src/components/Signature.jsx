import React, { useState } from "react";

export default function Signature() {
  const [details, setDetails] = useState({
    clientSignature: "",
    date: "",
    daytimeTelNumber: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value
      };
    });
  }
  // function handleClick(event) {
  //   event.preventDefault();
  //   setDetails(details);
  // }
  return (
    <div className="Form">
      <div className="container">
        <div className="row">
          <span className="input-group-text" id="basic-addon4">
            SIGNATURE OF CLIENT:
          </span>
          <input
            className="longInput"
            name="clientSignature"
            onChange={handleChange}
            placeholder="Client's signature"
            value={details.clientSignature}
          />
        </div>
        <div className="row">
          <span className="input-group-text" id="basic-addon5">
            DATE:
          </span>
          <input
            className="longInput"
            name="date"
            onChange={handleChange}
            placeholder="Date"
            value={details.date}
          />
        </div>
        <div className="row">
          <span className="input-group-text" id="basic-addon6">
            DAYTIME TELEPHONE NUMBER:
          </span>
          <input
            className="longInput"
            name="daytimeTelNumber"
            onChange={handleChange}
            placeholder="Daytime Telephone Number"
            value={details.daytimeTelNumber}
          />
        </div>
      </div>
    </div>
  );
}
