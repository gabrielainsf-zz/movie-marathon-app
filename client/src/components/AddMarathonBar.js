import React from 'react';
import './AddMarathonBar.css';

class AddMarathonBar extends React.Component {

    render() {
        return (
            <div className="header">
                <h2>Plan a movie a movie marathon</h2>
                <form onSubmit={this.props.addMarathon}>
                    <input
                        placeholder="Name Your Marathon"
                        value={this.props.currentMarathon.marathon}
                        ref={this.props.inputelement}
                        onChange={this.props.handleInput}
                        className="inputBar"
                    >
                    </input>

                    <button type="submit">Start</button>
                </form>
            </div>
            )
    }
}

export default AddMarathonBar;