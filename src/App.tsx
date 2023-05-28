import React from "react";
import "./App.css";
import Popular from "./pages/Popular";
import Battle from "./pages/Battle";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route path={"/git-bottle"} element={<Popular />} />
        <Route path={"/battle"} element={<Battle />} />
        <Route path={"*"} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
