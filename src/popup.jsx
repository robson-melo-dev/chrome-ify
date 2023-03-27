import React from "react";
import { render } from "react-dom";


export default function Popup() {
  return (
    <div>
      <h1>Hello from popup.jsx</h1>
    </div>
  )
}

render(<Popup />, document.getElementById("react-target"));
