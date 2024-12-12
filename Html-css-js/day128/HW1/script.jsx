import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>შუა ქალაქი</h1>
    <nav>
      <Link to="/characters">პერსონაჟები</Link> | 
      <Link to="/episodes">ეპიზოდები</Link> | 
      <Link to="/themes">თემები</Link>
    </nav>
  </div>
);

const Characters = () => <div><h2>პერსონაჟები</h2><ul><li>გიორგი</li><li>თეა</li><li>დავით</li></ul></div>;
const Episodes = () => <div><h2>ეპიზოდები</h2><ul><li>ეპიზოდი 1</li><li>ეპიზოდი 2</li></ul></div>;
const Themes = () => <div><h2>თემები</h2><ul><li>მეგობრობა</li><li>პრობლემები</li></ul></div>;

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/characters" component={Characters} />
    <Route path="/episodes" component={Episodes} />
    <Route path="/themes" component={Themes} />
  </Router>
);

export default App;
