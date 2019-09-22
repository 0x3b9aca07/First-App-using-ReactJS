import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    // cstring: "Hello I am Vivek",
    people :[{
      "name":"a",
      "email":"a@gmail.com"
    },
    {
      "name":"b",
      "email":"b@gmail.com"
    }
  ]
  }
  componentDidMount () {
    console.log('component mounted')
  }
  componentDidUpdate() {
    console.log('component updated')
  }
 render() {

  return (
    <div className="App">
          {this.state.people.map((person, index) => {
            return(
              <div className="App">
              <CardList Users={this.state.people}/>
              <h1>{person.name}</h1>
            <p>{person.email}</p>
            </div>
             )
          })}
       <h1>{this.state.string + "I am Vivek S"}</h1> 
        <button onClick={()=> this.setState({string:"Vivek"})}>Change state</button>
         <h1>{this.state.string + "I am Vivek S"}</h1> 
        <button onClick={()=> this.setState({ string: "abcd"})}>Change state</button>
        
        {this.state.string}
    </div>
  );
}
}
export default App;
