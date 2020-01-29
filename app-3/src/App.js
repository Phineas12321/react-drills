import React from 'react'
import './App.css'

class App extends React.Component{
  constructor(){
    super()

    this.state={
      filteredArr: '',
      arr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  handleChange(filter){
    this.setState({filteredArr: filter})
  }

  render(){
    let displayArr = this.state.arr
    .filter((e, i)=>{
      return e.includes(this.state.filteredArr)
    })
    .map((e, i)=>{
      return <h2 key={i}>{e}</h2>
    })

    return(
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)} type='text'/>
        {displayArr}
      </div>
    )
  }
}

export default App