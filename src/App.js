import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Nav from './components/nav';
import Footer from './components/footer';
import Body from './components/body';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Body>
        <Nav />
        <Route exact path={["/", "/about"]} component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Body>
      <Footer />

    </Router>
  );
}

export default App;
