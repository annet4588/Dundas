import React, { useState } from "react";

export default function SiteAgent() {
  const [details, setDetails] = useState({
    gasMeter: "",
    gasMeterNo: "",
    electricMeter: "",
    electricMeterNo: "",
    clientSignature: "",
    dundasSignature: "",
    date: "",
    siteManager: ""
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
      <h2 style={{ textDecoration: "underline" }}>TO SITE/SALES AGENT</h2>
      <p className="paragraph">
        THIS FORM MUST BE SIGNED BY THE CLIENT, GAS AND ELECTRICITY METER
        READINGS INSERTED AND THE FORM RETURNED TO HEAD OFFICE TO COMPLETE THE
        RECORDS OF THE ABOVE PLOT.
      </p>
      <div className="Grid">
        <div>
          <div className="row">
            <div className="col">
              <span>GAS METER READING:</span>
              <input
                className="longInput"
                name="gasMeter"
                onChange={handleChange}
                placeholder="Insert Gas Meter"
                value={details.gasMeter}
              />
            </div>
            <div className="col">
              <span>GAS METER SERIAL No.:</span>
              <input
                className="longInput"
                name="gasMeterNo"
                onChange={handleChange}
                placeholder="Insert Gas Meter Serial No."
                value={details.gasMeterNo}
              />
            </div>
          </div>
        </div>
        {/* <div class="w-70"></div> */}
        {/* <br /> */}
        <div>
          <div className="row">
            <div className="col">
              <span>ELECTRIC METER READING:</span>
              <input
                className="longInput"
                name="eletricMeter"
                onChange={handleChange}
                placeholder="Insert Electric Meter"
                value={details.electricMeter}
              />
            </div>
            {/* </div> */}
            {/* <br /> */}
            {/* <div className="row"> */}
            <div className="col">
              <span>ELECTRIC METER SERIAL No.:</span>
              <input
                className="longInput"
                name="electricMeterNo"
                onChange={handleChange}
                placeholder="Insert Electric Meter Serial No."
                value={details.electricMeterNo}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <span className="input-group-text" id="basic-addon11">
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
          <span className="input-group-text" id="basic-addon12">
            SIGNATURE OF DUNDAS REPRESENTATIVE:
          </span>
          <input
            className="longInput"
            name="dundasSignature"
            onChange={handleChange}
            placeholder="Dundas Representative's signature"
            value={details.dundasSignature}
          />
        </div>
        <div className="row">
          <span className="input-group-text" id="basic-addon13">
            DATE:
          </span>
          <input
            className="longInput"
            name="date"
            onChange={handleChange}
            placeholder="Type Date"
            value={details.date}
          />
        </div>
        <div className="row">
          <span className="input-group-text" id="basic-addon14">
            SITE MANAGER CONTACT DETAILS:
          </span>
          <input
            className="longInput"
            name="siteManager"
            onChange={handleChange}
            placeholder="Site Manager Contact Details"
            value={details.siteManager}
          />
        </div>
      </div>
    </div>
  );
}
