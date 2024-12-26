// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">მთავარი</Link> | <Link to="/series">ქართული სერიალები</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>ქართული სერიალები: ცხოვრება ეკრანზე</h1>;
}

function Series() {
  return (
    <div>
      <h2>პოპულარული ქართული სერიალები</h2>
      <ul>
        <li>შუა ქალაქი</li>
        <li>ჩემი ცოლის დაქალები</li>
        <li>ხელოვნური სუნთქვა</li>
        <li>გოგონა გარეუბნიდან</li>
      </ul>
    </div>
  );
}

export default App;
