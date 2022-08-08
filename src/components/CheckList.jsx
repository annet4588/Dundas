import React from "react";

export default function CheckList() {
  return (
    <div className="CheckList">
      <p className="paragraph">
        I have inspected the above property with a Representative of Dundas and
        have paid special attention to the items listed below and find the
        property to be of a satisfactory condition i.e. free from
        marks/scratches
      </p>
      <div className="Grid">
        <div>
          <ul>
            <li>
              <input type="checkbox" />
              <span>Kitchen Units & Worktops</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Glazing</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Sanitary Ware</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Mirrored Wardrobe Doors</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>All Pass Doors</span>
            </li>
          </ul>
        </div>
        <div>
          <span>Keys: {""}</span>
          <li>
            <input type="checkbox" />
            <span>Front Door</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Side/Rear Door</span>
          </li>
          <li>
            <input type="checkbox" />
            <span> French Doors</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Garage</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Windows</span>
          </li>
        </div>
      </div>
      <p className="paragraph">
        Please list any defects on the reverse side of this form. I also
        acknowledge receipt of the Homecare Manual
      </p>
      <br />
    </div>
  );
}
