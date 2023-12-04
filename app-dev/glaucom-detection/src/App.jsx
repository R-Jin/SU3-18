import { useState, useRef } from "react";
import { Button } from "@nextui-org/react";

import "./App.css";

function App() {
  const inputFile = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  return (
    <>
      <div>
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
        />
      </div>
      <h1>Do I have glaucoma?</h1>

      <div className="flex flex-col gap-4 items-center justify-center">
        <Button size="md" onClick={onButtonClick}>
          Ladda upp bild
        </Button>
        <Button size="md" disabled>
          Ta bild
        </Button>
      </div>
    </>
  );
}

export default App;
