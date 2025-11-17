import { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./pages/home";
import DeleteAccount from "./pages/delete";
import SupportPage from "./pages/support";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-delete-account" element={<DeleteAccount />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
