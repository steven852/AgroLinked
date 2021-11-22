import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Account/Home.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };

  }

  render(){
    return (
      <div>
      <Home />
      </div>
    );
  }

}

export default Dashboard;

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}
