"use client"
import React from "react"
// import { Document, Page } from "react-pdf"

const Resume = () => {
  const [numPages, setNumPages] = React.useState(null)
  const [pageNumber, setPageNumber] = React.useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div>
      {/* <Document file="/main.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}

export default Resume
