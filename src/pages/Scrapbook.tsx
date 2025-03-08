import React from "react"
import { ScrapPage } from "./components/ScrapPage"
import HTMLFlipBook from "react-pageflip"

import "../Scrapbook.css"

export default function Scrapbook() {
  return (
    <div className="scrapbook-container">
      <HTMLFlipBook width={300} height={500} usePortrait={true}>
        <ScrapPage number={1} image="/public/assets/scrap 2.jpg">
          A memorable hackathon@HuddleHive
        </ScrapPage>
        <ScrapPage number={2} image="/public/assets/scrap 1.jpg">
          A fun day at the beach with besties
        </ScrapPage>
        <ScrapPage number={3} image="/public/assets/scrap 1.jpg">
          Another fun day out!!!
        </ScrapPage>
      </HTMLFlipBook>
    </div>
  )
}
