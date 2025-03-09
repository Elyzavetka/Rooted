// @ts-nocheck
import { useRef } from "react";
import { ScrapPage } from "./components/ScrapPage";
import HTMLFlipBook from "react-pageflip";
import generatePDF from "react-to-pdf";

import "../Scrapbook.css";

const styles = `
  .demoPage {
    width: 210mm;
    height: 297mm;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #74a37b;
    border: 1px solid #ccc;
    padding: 20mm;
    text-align: center;
    box-sizing: border-box;
    margin: 0 auto;
    page-break-after: always;
  }

  .page-image {
    max-width: 100%;
    max-height: 200mm;
    object-fit: contain;
    margin: 10mm 0;
    border-radius: 8px;
  }
`;

export default function Scrapbook() {
  const targetRef = useRef(null);
  const pdfRef = useRef(null);

  const handleGeneratePDF = () => {
    generatePDF(pdfRef, { filename: "scrapbook.pdf" });
  };

  return (
    <>
      <button onClick={handleGeneratePDF}>Print me</button>
      <div className="scrapbook-container">
        <div ref={targetRef}>
          <HTMLFlipBook width={300} height={500} usePortrait={true}>
            <ScrapPage number={1} image="/assets/scrap 2.jpg">
              A memorable hackathon@HuddleHive
            </ScrapPage>
            <ScrapPage number={2} image="/assets/scrap 1.jpg">
              A fun day at the beach with besties
            </ScrapPage>
            <ScrapPage number={3} image="/assets/scrap 1.jpg">
              Another fun day out!!!
            </ScrapPage>
          </HTMLFlipBook>
        </div>

        {/* Hidden pages for PDF capture */}
        <style>{styles}</style>
        <div
          ref={pdfRef}
          style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
        >
          <ScrapPage number={1} image="/assets/scrap 2.jpg">
            A memorable hackathon@HuddleHive
          </ScrapPage>
          <ScrapPage number={2} image="/assets/scrap 1.jpg">
            A fun day at the beach with besties
          </ScrapPage>
          <ScrapPage number={3} image="/assets/scrap 3.jpg">
            Another fun day out!!!
          </ScrapPage>
        </div>
      </div>
    </>
  );
}
