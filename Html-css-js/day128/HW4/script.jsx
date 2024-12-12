import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>ქართული სერიალები</h1>
    <nav>
      <Link to="/serials">სერიალები</Link> | 
      <Link to="/genres">ჟანრები</Link>
    </nav>
  </div>
);

const Serials = () => <div><h2>სერიალები</h2><ul><li>შუა ქალაქი</li><li>ცეკვა ბეტონის</li></ul></div>;
const Genres = () => <div><h2>ჟანრები</h2><ul><li>დრამა</li><li>კომედია</li></ul></div>;

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/serials" component={Serials} />
    <Route path="/genres" component={Genres} />
  </Router>
);

export default App;
