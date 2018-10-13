import React from 'react';

class Movie extends React.Component {

    createMovieList = (movie) => {
        return <li
                key={movie.key}
                onClick={() => this.props.deleteMovie(movie.key)}
                >
                    {movie.movie}
               </li>
    }
    render() {
        const movies = this.props.moviesList
        const listMovies = movies.map(this.createMovieList)
        
        return <ul>{listMovies}</ul>
    }
}

export default Movie;