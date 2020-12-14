import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Box, Row } from "jsxstyle";

function PdfDisplay(props) {
  const [loaded, setLoaded] = useState(false);

  function onDocumentLoadSuccess() {
    console.log("loaded");
    setLoaded(true);
  }

  return (
    <Box
      border="1px solid rgba(0, 0, 0, 0.2)"
      position="relative"
      boxShadow="4px 8px 40px rgba(0, 0, 0, 0.05), 4px 8px 12px rgba(0, 0, 0, 0.1)"
    >
      <Box opacity={loaded ? "1" : "0"} transitionDuration="500ms">
        <Document file={props.filePath}>
          <Page
            pageNumber={1}
            width={900}
            onRenderSuccess={onDocumentLoadSuccess}
          />
        </Document>
      </Box>
      <Row
        transitionDuration="500ms"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        zIndex="10"
        display="flex"
      >
        <Box
          fontFamily="EB Garamond"
          color="rgba(0, 0, 0, 0.4)"
          opacity={loaded ? "0" : "1"}
          fontSize="32px"
        >
          Loading resume PDF...
        </Box>
      </Row>
    </Box>
  );
}

export default PdfDisplay;
