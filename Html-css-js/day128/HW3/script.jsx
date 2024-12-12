import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>ქართული ფილმები</h1>
    <nav>
      <Link to="/drama">დრამები</Link> | 
      <Link to="/comedy">კომედიები</Link> | 
      <Link to="/action">ქმედება</Link>
    </nav>
  </div>
);

const Drama = () => <div><h2>დრამები</h2><ul><li>ჩინური გემი</li><li>გზა</li></ul></div>;
const Comedy = () => <div><h2>კომედიები</h2><ul><li>გაბრიელა</li><li>მთვრალი მამაკაცი</li></ul></div>;
const Action = () => <div><h2>ქმედება</h2><ul><li>კანონი</li><li>შავი გული</li></ul></div>;

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/drama" component={Drama} />
    <Route path="/comedy" component={Comedy} />
    <Route path="/action" component={Action} />
  </Router>
);

export default App;
