import React from "react";
import ReactDOM from "react-dom/client";
 
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BlogContextProvider } from "./contexts/blogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogContextProvider>
        <App />
      </BlogContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
