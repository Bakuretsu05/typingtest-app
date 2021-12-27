import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
import Scores from "./pages/Scores";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="scores" element={<Scores />} />
      </Routes>
    </div>
  );
}
