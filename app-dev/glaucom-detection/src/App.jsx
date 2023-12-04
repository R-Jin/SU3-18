import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Do I have glaucoma?</h1>
      <div className="bg-slate-500 rounded-md">
        <button onClick={() => setCount((count) => count + 1)}>
          Ladda upp fil
        </button>
        <button onClick={() => setCount((count) => count + 1)}>Ta bild</button>
      </div>
    </>
  );
}

export default App;
