import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
