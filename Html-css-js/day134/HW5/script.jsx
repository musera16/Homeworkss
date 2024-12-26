// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">მთავარი</Link> | <Link to="/dances">ქართული ცეკვები</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dances" element={<Dances />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>ქართული ცეკვა: სული და კულტურა</h1>;
}

function Dances() {
  return (
    <div>
      <h2>ქართული ცეკვების ნაირსახეობები</h2>
      <ul>
        <li>ხორუმი</li>
        <li>მთიულური</li>
        <li>სამაია</li>
        <li>აჭარული</li>
        <li>ქართული</li>
      </ul>
    </div>
  );
}

export default App;
