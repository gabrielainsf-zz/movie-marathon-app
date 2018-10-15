import React, { Component } from 'react';
import './App.css';
import AddMarathonBar from './components/AddMarathonBar'
// import MarathonList from './components/MarathonList'

let marathons = [
          {
            "marathon_id": 0,
            "marathon_title": "Halloweeeeen",
            "movie_list": [
                {
                "movie_id": 0,
                "movie_title": "The Omen"
                },
                {
                "movie_id": 1,
                "movie_title": "Rosemary's Baby"
                }
            ]},
        {
          "marathon_id": 1,
          "marathon_title": "My Favorite Movies",
          "movie_list": [
            {
                "movie_id": 3,
                "movie_title": "Chungking Express"
            },

            {
                "movie_id": 4,
                "movie_title": "Up"
            }]  
        }
]

// let marathon = marathons.map(marathon => {
//         return <div key={marathon.marathon_id}> <h2>{marathon.marathon_title}</h2>
//           {marathon.movie_list.map( movie => {
//             return <li key={movie.movie_id}> {movie.movie_title} </li>
//           })}
//           </div>
// })

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      marathons: [],
      currentMarathon: { marathon_title: '', marathon_id: null }
    };
  }

  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  //   }
  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  //   callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  handleInput = (e) => {
    let marathon = e.target.value;
    let currentMarathon = { marathon_title: marathon, marathon_id: Date.now() }
    this.setState({
      currentMarathon
    })
  }

  addMarathon = (e) => {
    e.preventDefault();
    
    let marathonList = this.state.marathons;
  }

  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Marathons</h1>
        </header>
        <AddMarathon />
        <ul>

        </ul>
        <MarathonList marathonsList={marathons}/>
      </div>
    );
  }
}

class MarathonList extends Component {
  render () {
    console.log(marathons)
    let marathon = marathons.map(marathon => {
      // console.log(marathon)
      return <Marathon key={marathon.marathon_id} marathon={marathon}/>
    })
    return marathon
  }
}

class AddMarathon extends Component {
  render () {
    return <div>
      <form onSubmit={this.props.handleInput}>
        <input>
        </input>
        <button type="submit">
        </button>
      </form>
    </div>
  }
}

class Marathon extends Component {
  render () {
    return <div key={this.props.marathon.marathon_id}>
      <h3>{this.props.marathon.marathon_title}</h3>
      {this.props.marathon.movie_list.map(movie => {
        return <li key={movie.movie_id}>{movie.movie_title}</li>
      })}
    </div>
  }
}

export default App;
