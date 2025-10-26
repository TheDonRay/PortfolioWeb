import "./Styles/App.css";
import HomePage from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Email from "./Components/Email.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/email" element={<Email />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
