import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import MainPage from "./components/MainPage";

const root = document.getElementById("root");

if (root instanceof HTMLElement) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
