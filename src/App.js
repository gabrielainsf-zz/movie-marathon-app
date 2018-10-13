import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Marathon from './components/Marathon';
import AddMarathonBar from './components/AddMarathonBar'
import MarathonList from './components/MarathonList'

class App extends Component {

  inputElement = React.createRef()

  constructor(props) {
    super(props);

    this.state = {
      marathons: [],
      currentMarathon: { marathon: '', key: ''}
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
        <MarathonList
          marathons={this.state.marathons}
          deleteMarathon={this.deleteMarathon}
        />
      </div>
    );
  }
}

export default App;
