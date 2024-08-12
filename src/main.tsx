import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./app/Routes.tsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
