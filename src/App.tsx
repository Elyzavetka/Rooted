import { BrowserRouter, Route, Routes } from "react-router-dom";
import Garden from "./pages/Garden";
import Scrapbook from "./pages/Scrapbook";
import Events from "./pages/Events/Events";
import Profile from "./pages/Profile";
import "./App.css";
import Gardens from "./pages/Gardens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gardens />}></Route>
        <Route path="scrapbook" element={<Scrapbook />}></Route>
        <Route path="events" element={<Events />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="garden/huddle-hive" element={<Garden />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
