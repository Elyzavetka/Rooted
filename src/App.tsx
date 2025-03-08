import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Garden from "./pages/Garden"
import Scrapbook from "./pages/Scrapbook"
import Events from "./pages/Events"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="garden" element={<Garden />}></Route>
        <Route path="scrapbook" element={<Scrapbook />}></Route>
        <Route path="events" element={<Events />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
