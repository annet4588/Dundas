import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import logo from "./logo.png";

export default function Header() {
  // const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="Header">
        <div id="content">
          <img style={{}} src={logo} alt="Logo" />
        </div>
        <h1>DUNDAS ESTATES & DEVELOPMENT CO. LTD.</h1>

        <div className="row">
          <div className="form-group">
            <span className="input-group-text" id="basic-addon1">
              DATE:
            </span>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          {/* className="longInput"
            onChange={handleChange}
            placeholder="Type Current Date"
            value={date} */}
        </div>
      </div>
    </>
  );
}

// function handleChange(event) {
//   console.log(event.target.value);
//   setDate(event.target.value);
// }
// function handleClick(event) {
//   event.preventDefault();
//   console.log(setDate);
//   setDate(date);
// }
