import React from "react";
import { render } from "react-dom";


export default function popup() {
  return (
    <div>
      <h1>Hello from popup.jsx</h1>
    </div>
  )
}

render(<popup />, document.getElementById("react-target"));
