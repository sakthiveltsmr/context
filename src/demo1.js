import React, { useContext } from "react";
import { Data } from "./App";
export default function Demo1() {
  const context = useContext(Data);
  return (
    <div>
      <h1>{context}</h1>
    </div>
  );
}
