import React, { Component } from 'react';
import './App.css';
import AddMarathonBar from './components/AddMarathonBar'
import MarathonList from './components/MarathonList'

class App extends Component {

  inputElement = React.createRef()

  constructor(props) {
    super(props);

    this.state = {
      marathons: [],
      currentMarathon: { marathon: '', key: ''},
      data: null
    };
  }

  handleInput = (e) => {
    const marathonName = e.target.value;
    const currentMarathon = { marathon: marathonName, key: Date.now() }

    this.setState({
      currentMarathon
    });
  }

  addMarathon = (e) => {
    e.preventDefault();

    const marathonToAdd = this.state.currentMarathon
    const marathonList = [...this.state.marathons, marathonToAdd]

    this.setState({
      marathons: marathonList,
      currentMarathon: { marathon: '', key: '' }
    });
  }

  deleteMarathon = (key) => {

    const marathonsList = this.state.marathons
    const filteredList = marathonsList.filter(marathon => {
      return marathon.key !== key
    });

    this.setState({
      marathons: filteredList
    });
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
    return (
      <div className="App">
        <header className="App-header">
          <AddMarathonBar
            currentMarathon={this.state.currentMarathon}
            addMarathon={this.addMarathon}
            handleInput={this.handleInput}
            inputElement={this.inputElement}
          />
        </header>
        <h2>{this.state.data}</h2>
        <MarathonList
          marathons={this.state.marathons}
          deleteMarathon={this.deleteMarathon}
        />
      </div>
    );
  }
}

export default App;
