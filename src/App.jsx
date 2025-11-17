import { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/privacy";
import Home from "./pages/home";
import DeleteAccount from "./pages/delete";
import TermsAndCondition from "./pages/terms";
import SupportPage from "./pages/support";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-delete-account" element={<DeleteAccount />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
