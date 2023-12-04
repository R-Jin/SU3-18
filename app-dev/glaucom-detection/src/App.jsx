import { useState } from "react";
import { Button } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

import "./App.css";

function App() {
  return (
    <>
      <div></div>
      <h1>Do I have glaucoma?</h1>

      <div className="flex gap-4 items-center">
        <Button size="sm" color="primary">
          Small
        </Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </>
  );
}

export default App;
