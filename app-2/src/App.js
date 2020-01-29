import React from 'react'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      arr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'] 
    }
  }

  render(){
    let displayArr = this.state.arr.map((e, i)=>{
      return <h2 key={i}>{e}</h2>
    })
    return(
      <div className='App'>
        {displayArr}
      </div>
    )
  }
}

export default App