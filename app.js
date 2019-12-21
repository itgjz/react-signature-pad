import React from "react";
import ReactDOM from "react-dom";
import SignaturePad from "./src/index";

ReactDOM.render(
  <SignaturePad
    clearButton="true"
    clearTxt="清空"
  />,
  document.getElementById('container')
)