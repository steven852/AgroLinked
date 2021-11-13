import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Auth/Login.js';
import Register from './components/Auth/Register.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class Auth extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };

  }

  render(){
    return (
      <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
        </Routes>
      </Router>
      </div>
    );
  }

}

export default Auth;

if (document.getElementById('auth')) {
    ReactDOM.render(<Auth />, document.getElementById('auth'));
}
