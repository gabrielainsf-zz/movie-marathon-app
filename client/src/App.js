import React, { Component } from 'react';
import './App.css';
import sampledata from './sampledata.json'
import AddMarathonBar from './components/AddMarathonBar'
import MarathonList from './components/MarathonList'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "data": null
    }
  }


  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {

    let marathons = sampledata.marathons
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Marathons</h1>
        </header>
        <ul>
          {marathons.map(marathon => {
            return <div key={marathon.marathon_id}> <h2>{marathon.marathon_title}</h2>
              {marathon.movie_list.map( movie => {
                return <li key={movie.movie_id}> {movie.movie_title} </li>
              })}
              </div>
    })}
        </ul>

      </div>
    );
  }
}

export default App;
