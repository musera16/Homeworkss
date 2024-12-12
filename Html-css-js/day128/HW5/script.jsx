import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>ქართული ცეკვები</h1>
    <Link to="/types">ცეკვების ნაირსახეობები</Link>
  </div>
);

const Types = () => (
  <div>
    <h2>ნაირსახეობები</h2>
    <Link to="/types/folk">ფოლკლორი</Link> | 
    <Link to="/types/modern">მოდერნი</Link>

    <Route path="/types/folk" render={() => <div>კახური, აფხაზური</div>} />
    <Route path="/types/modern" render={() => <div>სალსა, ჰიპ-ჰოპი</div>} />
  </div>
);

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/types" component={Types} />
  </Router>
);

export default App;
