import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import ReactToPdf from 'react-to-pdf';
import { Document, Page, Text, BlobProvider } from '@react-pdf/renderer';
const MyPdfComponent = () => {
    return (
      <Document>
        <Page>
          <Text>Hello, world!</Text>
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
        <div>
            <ReactToPdf targetRef={ref} filename="my_pdf_document.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Export to PDF</button>
                )}
            </ReactToPdf>
            <div ref={ref}>
            <h1 className="text-center">This Is Blog</h1>
            <h1>Tell us the differences between uncontrolled and controlled components. How to validate React props using PropTypes Tell us the difference between nodejs and express js.</h1>
            </div>
            
            <Button>Dwonload Pdf</Button>
        </div>
    );
};

export default Blog;