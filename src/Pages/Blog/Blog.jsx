import React, { useRef } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import ReactToPdf from 'react-to-pdf';
import { Document, Page, Text, BlobProvider } from '@react-pdf/renderer';
import { FaArrowDown } from 'react-icons/fa';
const MyPdfComponent = () => {
  return (
    <Document>
      <Page>
        <Text></Text>
      </Page>
    </Document>
  );
};
const DownloadPdfButton = () => {
  return (
    <BlobProvider document={<MyPdfComponent />}>
      {({ url, loading, error }) => {
        if (loading) {
          return <span>Loading...</span>;
        }

        if (error) {
          return <span>An error occurred: {error.message}</span>;
        }

        return (
          <a href={url} download="my_pdf_document.pdf">
            Download PDF
          </a>
        );
      }}
    </BlobProvider>
  );
};


const Blog = () => {
  const ref = useRef(null);
  return (
    <div className="my-3">
      <div className="d-flex my-5">
        <h1 className="flex-grow-1">This Is Blog</h1>
        <ReactToPdf targetRef={ref} filename="blogPDF.pdf">
        {({ toPdf }) => (
          <Button onClick={toPdf}>Dwonload as PDF<FaArrowDown></FaArrowDown></Button>

        )}
      </ReactToPdf>    
      </div>
      <div ref={ref}>
        <h1 className="text-danger">1. Tell us the differences between uncontrolled and controlled components.</h1>
        <h5>Controlled Components</h5>
        <ol>
          <li>Variables or elements directly regulated or managed by the system or process</li>
          <li>Temperature and pressure in a specific machine, speed of raw material input</li>
          <li>Allow for more precise management and optimization</li>
        </ol>
        <h5>Uncontrolled Components</h5>
        <ol>
          <li>Variables or elements not directly regulated or managed by the system or process</li>
          <li>Variations in raw materials, ambient temperature, or humidity levels in a factory</li>
          <li>Can introduce unpredictability and variability</li>
        </ol>
        <h1 className="text-danger">2. How to validate React props using PropTypes</h1>
        <p>We can verify the props supplied to a React component using the library React PropTypes. PropTypes is a typechecking package that assists programmers in finding problems and enhancing the quality of their code by ensuring that the components are receiving props of the required kinds.</p>

        <h1 className="text-danger">Tell us the difference between nodejs and express js.</h1>
        <h5>Nodejs</h5>
        <ol>
          <li>JavaScript runtime environment</li>
          <li>Allows us to run JavaScript code on the server-side</li>
          <li>Provides a set of core APIs for building web applications, such as the HTTP module for handling HTTP requests and responses</li>
        </ol>
        <h5>Express js</h5>
        <ol>
          <li>Web application framework built on top of Node.js</li>
          <li>Provides a set of tools and features for building web applications on top of Node.js</li>
          <li>Builds on top of the core APIs of Node.js to provide a more robust and feature-rich web development experience</li>



        </ol>
        <h1 className="text-danger">What is a custom hook, and why will you create a custom hook?</h1>
        <p>React's custom hook function enables us to take the functionality from one component and reuse it in other components. With the use of custom hooks, we can abstract away complicated logic into a single, reusable unit, which helps lessen code duplication and enhance the structure and maintainability of our code as a whole.

          By writing a function that makes use of one or more built-in React hooks or other custom hooks, one may develop their own hooks. Any information or tools that the component requires should be returned by the function. A custom hook can be written once, then imported and used in as many components of the same application as needed.
        </p>
      </div>
    </div>
  );
};

export default Blog;