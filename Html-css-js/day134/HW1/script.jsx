// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">მთავარი</Link> | <Link to="/characters">პერსონაჟები</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>სერიალი: შუა ქალაქი</h1>;
}

function Characters() {
  return (
    <div>
      <h2>შუა ქალაქის პერსონაჟები</h2>
      <ul>
        <li>გუგული</li>
        <li>ვახო</li>
        <li>ქეთო</li>
      </ul>
    </div>
  );
}

export default App;
