import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      <p>Copyright ⓒ {year}</p>
    </div>
  );
}
