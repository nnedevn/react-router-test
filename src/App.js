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
      <div className="container">
        <Router>
          <div>
            <nav className="">
              <ul className="nav navbar-nav">
                <li class="nav-item"><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/movie">Movie</Link></li>
                <li><Link to="/food">Food</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/movie" component={Movie} />
              <Route exact path="/food" component={Food} />
              <Route exact path="/about" component={About} />
            </div>

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
