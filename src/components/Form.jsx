import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState({
    client: "",
    plot: "",
    development: "",
    postalAddress: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setName((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  // function handleClick(event) {
  //   props.onSubmit(name);
  //   event.preventDefault();
  //   console.log(setName);
  //   setName({
  //     client: "",
  //     plot: "",
  //     development: "",
  //     postalAddress: ""
  //   });
  // }

  return (
    <div className="Form">
      <h2 style={{ textDecoration: "underline" }}>
        CLIENT’S HANDOVER INSPECTION FORM
      </h2>

      <div className="container">
        <div className="row">
          <span className="input-group-text" id="basic-addon1">
            CLIENT:
          </span>
          <input
            className="longInput"
            name="client"
            onChange={handleChange}
            placeholder="Client's Name"
            value={name.client}
            // onSubmit={handleClick}
          />
        </div>
        <div className="row">
          <span className="input-group-text" id="basic-addon2">
            PLOT:
          </span>
          <input
            className="longInput"
            name="plot"
            onChange={handleChange}
            placeholder="Plot's Number"
            value={name.plot}
            // onSubmit={handleClick}
          />
        </div>
        <div className="row">
          <span className="input-group-text" id="basic-addon3">
            DEVELOPMENT:
          </span>
          <input
            className="longInput"
            name="development"
            onChange={handleChange}
            placeholder="Development's Name"
            value={name.development}
          />
        </div>
        <div className="row">
          <span className="input-group-text" id="basic-addon4">
            POSTAL ADDRESS:
          </span>
          <input
            className="longInput"
            name="postalAddress"
            onChange={handleChange}
            placeholder="Postal Address"
            value={name.postalAddress}
          />
        </div>
      </div>
    </div>
  );
}
