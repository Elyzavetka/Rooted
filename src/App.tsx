import { useState } from "react";
import "./App.css";
import EventList from "./components/EventsList/EventsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <EventList />
      </div>
    </>
  );
}

export default App;
