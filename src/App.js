import { useState } from "react";
import "./styles.css";

export default function App() {
  const [ctime, updateTime] = useState("");
  function updateCurrent() {
    let time = new Date().toLocaleTimeString();
    updateTime(time);
  }
  setInterval(updateCurrent, 1000);
  return (
    <div className="App">
      <h1>{ctime}</h1>
    </div>
  );
}
