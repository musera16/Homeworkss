// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">მთავარი</Link> | <Link to="/films">ქართული ფილმები</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>ქართული კინო: ტრადიცია და კულტურა</h1>;
}

function Films() {
  return (
    <div>
      <h2>ქართული ფილმები</h2>
      <ul>
        <li>მიმინო</li>
        <li>დათა თუთაშხია</li>
        <li>ჯარისკაცის მამა</li>
        <li>ქვევრი</li>
      </ul>
    </div>
  );
}

export default App;
