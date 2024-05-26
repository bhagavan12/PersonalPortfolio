// import data from "../../data/index.json";
// import { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// export default function MyPortfolio() {
//     useEffect(() => {
//         AOS.init();
//     }, []);
//     const handleGit = (url) => {
//         const newTab = window.open(url, '_blank');
//         newTab.focus();
//     }
//     return (
//         <section className="resume--section" id="MyPortfolio" data-aos="zoom-in">
//             <iframe
//                 src="./PDF/2100032454-J Sai Bhagavan _15_2_24.pdf"
//                 width="100%"
//                 height="500"
//                 title="PDF Viewer"
//                 type="application/pdf"
//                 frameborder="0"
//                 allowfullscreen
//             />
//         </section>

//     );
// }
// {/* <Document file="./PDF/2100032454-J Sai Bhagavan _15_2_24.pdf">
// <Page pageNumber={1} width={800} />
// </Document> */}
// import { AiOutlineDownload } from "react-icons/ai";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import pdf from "./2100032454-J Sai Bhagavan _15_2_24.pdf";
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             {/* <AiOutlineDownload /> */}
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         <Row className="resume">
//           <Document file={pdf} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "./2100032454-Javvadi Sai Bhagavan.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Row className="rowresume" >
                    <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>Download Resume</Button>
                </Row>
                <Row className="resume">
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false} /> {/* Setting renderTextLayer prop to false */}
                    </Document>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;
