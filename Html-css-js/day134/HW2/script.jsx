// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">მთავარი</Link> | <Link to="/history">ისტორია</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>ქერჩი: ქალაქი ზღვის პირას</h1>;
}

function History() {
  return (
    <div>
      <h2>ქერჩის ისტორია</h2>
      <p>
        ქერჩი არის ერთ-ერთი უძველესი ქალაქი შავი ზღვის რეგიონში, 
        ცნობილი მისი კულტურული და ისტორიული მემკვიდრეობით.
      </p>
    </div>
  );
}

export default App;
