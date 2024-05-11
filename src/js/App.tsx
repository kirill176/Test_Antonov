import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import TodoDetailsPage from "./components/TodoDetailsPage";
import { Link } from "react-router-dom";

export default function App() {
  console.log("App render");
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:id" element={<TodoDetailsPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}
