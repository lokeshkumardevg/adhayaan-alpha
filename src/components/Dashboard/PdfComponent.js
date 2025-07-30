// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";

// function PdfComponent({ pdfLink }) {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   const renderPages = () => {
//     const pages = [];
//     for (let i = 1; i <= numPages; i++) {
//       pages.push(<Page height={'600'} key={`page_${i}`} pageNumber={i} width={830} />);
//     }
//     return pages;
//   };

//   return (
//     <div className="pdf-div">
//       <p className="page-counter">
//         Page {pageNumber} of {numPages}
//       </p>
//       <Document file={pdfLink} onLoadSuccess={onDocumentLoadSuccess}>
//         {renderPages()}
//       </Document>
//     </div>
//   );
// }

// export default PdfComponent;
