import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [
        {
          name: 'shoes',
          price: 42,
          image: 'as;dlgkja'
        },
        {
          name: 'shoes',
          price: 42,
          image: 'as;dlgkja'
        },
        {
          name: 'shoes',
          price: 42,
          image: 'as;dlgkja'
        }
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Dashboard inventory={this.state.inventory}/>
          <Form />
        </div>
  
      </div>
    );
  }
}

export default App;
