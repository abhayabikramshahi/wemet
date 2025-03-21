import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./pages/Home";
import FAQ from "./pages/Faq";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}
