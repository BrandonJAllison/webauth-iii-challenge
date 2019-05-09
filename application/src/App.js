import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';
import Users from './Users';

const button = {
  borderRadius: "15px",
  border: 'none'
}

const Home = props => {
  return (
    <div>
      <h3>Welcome Home</h3>
    </div>
  )
}

class App extends Component {
  logout = () => {
    localStorage.removeItem('jwt');
    window.location.reload();

  }

  SubmitHandler = (event) => {
    event.preventDefault();
    this.setState();

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <NavLink to='/' exact> Home</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to='/SignUp'>Sign Up</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to='/SignIn'>Sign In</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to='/Users'>Users Page</NavLink>&nbsp;&nbsp;
            <button style={button} onClick={this.logout} onSubmit={this.SubmitHandler}>Sign Out</button>
          </header>
        
        <div>
          <Route path='/' component={Home} exact></Route>
          <Route path='/SignUp' component={SignUp} exact></Route>
          <Route path='/SignIn' component={SignIn} exact></Route>
          <Route path='/Users' component={Users} exact></Route>
        </div>
        
      </div>
    );
  }
}

export default App;
