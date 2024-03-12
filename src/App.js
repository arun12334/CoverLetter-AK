import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Cover from './Asstes/Cover.pdf';
import './App.css';

function App() {






  return (
    <div className="pdf-container">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl={Cover} defaultScale={1.3} />
      </Worker>
    </div>
  );
}

export default App;
