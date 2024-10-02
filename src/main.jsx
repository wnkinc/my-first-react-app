import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import App2 from "./animals.jsx";
import { Greeting, Pizza, Test } from "./Greeting.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App2 />
    <Greeting />
    <Pizza />
    <App />
    <Test />
  </StrictMode>
);
