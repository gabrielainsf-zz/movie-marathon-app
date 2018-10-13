import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import Marathon from './components/Marathon';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
  createMarathon = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Marathon />
        <Marathon />
        <Marathon />
      </div>
    );
  }
}

export default App;
