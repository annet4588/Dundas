import React from "react";
import Header from "./Header";
import Form from "./Form";
import CheckList from "./CheckList";
import Signature from "./Signature";
import SiteAgent from "./SiteAgent";
import Footer from "./Footer";
import Pdf from "react-to-pdf";

// import { Document, Page } from "@react-pdf/renderer";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";

const ref = React.createRef();

export default function App() {
  return (
    <div className="container">
      <div className="App">
        {/* <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="test"
          sheet="tablexls"
          buttonText="Download as XLS"
        /> */}
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Submit Form</button>}
        </Pdf>
        <div ref={ref}>
          <div>
            <Header />
            <Form />
            <CheckList />
            <Signature />
            <SiteAgent />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";

// import Submit from "./Submit";
// import PrintIcon from "@material-ui/icons/Print";
// import Button from "@material-ui/core/Button";
// import ReactToPrint from "react-to-print";

// let componentRef = useRef();
// const [inputText, setInputText] = useState({});
// const inputRef = useRef(null);
// // function handleClick(event) {
// const printDocument = () => {
//   html2canvas(inputRef.current).then((canvas) => {
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF();
//     pdf.addImage(imgData, "JPEG", 0, 0);
//     pdf.save("download.pdf");
//   });
// };
// setInputText();
// event.preventDefault();

//   return (
//     <>
//       <div>
//         {/* button to trigger printing of target component */}
//         <ReactToPrint
//           trigger={() => <Button>{<PrintIcon />}</Button>}
//           content={() => componentRef}
//         />

//         {/* component to be printed */}
//         <ComponentToPrint ref={(el) => (componentRef = el)} />
//       </div>
//     </>
//   );
// }
// class ComponentToPrint extends React.Component {
//   render() {

// <div>
//   {/* button to trigger printing of target component */}
//   <ReactToPrint
//     trigger={() => <Button>{<PrintIcon />}</Button>}
//     content={() => componentRef}
//   />
// var doc = new jsPDF();
// doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
// doc.save("myDocument.pdf");

// {/*

/* <div className="mb5">
          <button onClick={printDocument}>Print</button>
        </div>

        <div id="divToPrint" ref={inputRef}></div> */

/* // return (
//   <>
//     <div className="App">
//       <div className="mb5">
//         <button onClick={printDocument}>Print</button>
//       </div>
//       <div id="divToPrint" ref={inputRef}></div>
//     </div>
//   </>
// ); */

/* // return (
//   <>
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <div className="mb5">
//         <button onClick={printDocument}>Print</button>
//       </div>
//       <div id="divToPrint" ref={inputRef}>
//         <div>Note: Here the dimensions of div are same as A4</div>
//         <div>You Can add any component here</div>
//       </div>
//     </div>
//   </>
// );
// };
// export default App;
// const [fields, setField] = useState("");

// function submitField(newField) {
//   setField((prevField) => {
//     return [...prevField, newField];
//   });
// } */
//  */}

// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
// import { PDFViewer } from '@react-pdf/renderer';

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// // Create Document Component
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

// <PDFViewer>
// <MyDocument />
// </PDFViewer>
