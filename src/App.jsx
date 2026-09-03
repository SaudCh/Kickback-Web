import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DeleteAccount from "./pages/delete";
import SupportPage from "./pages/support";
import CSAE from "./pages/csae";
import PrivacyPolicy from "./pages/privacy";
import TermsAndConditions from "./pages/terms";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-delete-account" element={<DeleteAccount />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/child-safety-standards" element={<CSAE />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
