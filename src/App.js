import React, { Component } from 'react';
import './App.css';

/*Import Components */
import Home from './Home';
import Blog from './Blog';
import Movie from './Movie';
import About from './About';
import Food from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Blog/>
        <Movie/>
        <Food/>
        <About/>
      </div>
    );
  }
}

export default App;
