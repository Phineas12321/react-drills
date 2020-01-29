import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      message: ''
    }
  }

  handleMessage(value){
    this.setState({message: value})
  }

  render(){
    return(
      <div className='App'>
        <input className='text-box' onChange={(e)=>this.handleMessage(e.target.value)} type='text'></input>
    <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default App;
