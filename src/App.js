import React, { Component } from 'react';
/*Import Router */
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

/*Import Components */
import Home from './Home';
import Blog from './Blog';
import Movie from './Movie';
import About from './About';
import Food from './Food';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <header><nav className="nav justify-content-center">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/blog">Blog</Link>
            <Link className="nav-link" to="/movie">Movie</Link>
            <Link className="nav-link" to="/food">Food</Link>
            <Link className="nav-link" to="/about">About</Link>
          </nav>
          </header>
          
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/movie" component={Movie} />
            <Route exact path="/food" component={Food} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
