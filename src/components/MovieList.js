import React from 'react';

class MovieList extends React.Component {
    render() {
        return (
            <div className="MovieList">
                <form onSubmit={this.props.addMovie}>
                    <input
                        ref={this.props.inputElement}
                        value={this.props.currentMovie.movie}
                        onChange={this.props.handleInput}
                    >
                    </input>
                    <button type="submit">Add Movie</button>
                </form>
            </div>

            )
    }
}

export default MovieList;