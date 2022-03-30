import React, { useState } from "react";
import Demo1 from "./demo1";

export default function Demo() {
  const [show, setshow] = useState(false);
  return (
    <div>
      {show ? <Demo1 /> : null}
      <button onClick={() => setshow(!show)}>click here</button>
    </div>
  );
}
