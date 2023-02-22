import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLDivElement
);

root.render(<App />);
