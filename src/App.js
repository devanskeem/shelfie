import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import {HashRouter as Router} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      currentId: null
    }
  }
  getInventory = () => {
    axios.get('http://localhost:4000/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }
  updateCurrentId = (currentId) =>{
    this.setState({
      currentId
    })
  }
  componentDidMount(){
    this.getInventory()
  }
  render(){
    return (
      <div className="App">
        <Router>
        <Header />
        <div className="content">
          <Dashboard updateCurrentId={this.updateCurrentId} inventory={this.state.inventory} getInventory={this.getInventory}/>
          <Form inventory={this.state.inventory} getInventory={this.getInventory} currentId={this.state.currentId}/>
        </div>
        </Router>
  
      </div>
    );
  }
}

export default App;
