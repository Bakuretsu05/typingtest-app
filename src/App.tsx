import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Scores from "./pages/Scores";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="scores" element={<Scores />} />
      </Routes>
    </div>
  );
}
