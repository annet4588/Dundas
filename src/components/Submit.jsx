// import { useRef } from "react";
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";

// // import "./styles.css";

// const App = () => {
//   const inputRef = useRef(null);
//   const printDocument = () => {
//     html2canvas(inputRef.current).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, "JPEG", 0, 0);
//       pdf.save("download.pdf");
//     });
//   };
//   return (
//     <>
//       <div className="App">
//         <div className="mb5">
//           <button onClick={printDocument}>Print</button>
//         </div>
//         <div id="divToPrint" ref={inputRef}></div>
//       </div>
//     </>
//   );
// };
// export default App;

// import React, { useState, Component, PropTypes} from "react";

// export default function Submit() {
//   const [inputText, setInputText] = useState("");
//   function handleClick(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }

//   return (
//     <div className="Submit">
//       <button onClick={handleClick} type="submit" className="btn btn-lrg">
//         Submit
//       </button>
//     </div>
//   );
// }
