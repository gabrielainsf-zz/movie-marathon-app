import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import Movie from './components/Movie';

class App extends Component {
  inputElement = React.createRef()

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      currentMovie: { movie: '', key: '' } 
    }
  }

  // handleInput
  handleInput = (e) => {
    // variable to hold the new movie
    // console.log(e.target.value)
    const newMovie = e.target.value
    const currentMovie = { movie: newMovie, key: Date.now() }
    this.setState({
      currentMovie
    });
  }

  // addMovie
  addMovie = (e) => {
    e.preventDefault();
    // Need to grab the current movie from the state in order
    // to be able to add it
    const movieToAdd = this.state.currentMovie;
    const movies = [...this.state.movies, movieToAdd];

    this.setState({
      movies: movies,
      currentMovie: { movie: '', key: ''}
    });
  }

  // deleteMovie

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MovieList 
            handleInput={this.handleInput}
            addMovie={this.addMovie}
            inputElement={this.inputElement}
            currentMovie={this.state.currentMovie}
          />
          <Movie
            moviesList={this.state.movies}
          />
        </header>
      </div>
    );
  }
}

export default App;
