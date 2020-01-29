import React from 'react'

class Login extends React.Component{
  constructor(){
    super()

    this.state={
      username: '',
      password: ''
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  handleUsername(usr){
    this.setState({username: usr})
  }

  handlePassword(pass){
    this.setState({password: pass})
  }

  handleLogin(){
      alert(`Username: ${this.state.username}, Password: ${this.state.password}`)
  }

  render(){
    return(
      <div>
        <input onChange={e => this.handleUsername(e.target.value)}/>
        <input onChange={e => this.handlePassword(e.target.value)} />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

export default Login