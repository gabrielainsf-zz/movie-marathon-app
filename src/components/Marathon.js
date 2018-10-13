import React from 'react';
import MovieList from './MovieList';
import Movie from './Movie';
import App from './../App'
import './Marathon.css'

class Marathon extends React.Component {

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
    const newMovie = e.target.value;
    const currentMovie = { movie: newMovie, key: Date.now() };
    // const name = target.name;
    this.setState({
      currentMovie
      // [name]: value
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
  deleteMovie = (key) => {
    const filteredMovies = this.state.movies.filter( movie => {
      return movie.key !== key
    });

    this.setState({
      movies: filteredMovies
    })
  }

    render () {
        return (
            <div className="marathon">
                <h3 className="marathonTitle">Marathon title</h3>
                <Movie
                    moviesList={this.state.movies}
                    deleteMovie={this.deleteMovie}
                />
                <MovieList 
                    handleInput={this.handleInput}
                    addMovie={this.addMovie}
                    inputElement={this.inputElement}
                    currentMovie={this.state.currentMovie}
                />
            </div>
            )
    }
}

export default Marathon;