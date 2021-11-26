import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Account/Dashboard.js';
import Overview from './components/Account/Overview.js';
import Schedules from './components/Account/Schedules.js';
import AddTransaction from './components/Account/AddTransaction.js';
import TransactionHistory from './components/Account/TransactionHistory.js';

class Account extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };


  }

  render(){
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard content={<Overview />} />} />
          <Route exact path="/schedules" element={<Dashboard content={<Schedules />} />} />
          <Route exact path="/transactions/create" element={<Dashboard content={<AddTransaction />} />} />
          <Route exact path="/transactions/history" element={<Dashboard content={<TransactionHistory />} />} />
        </Routes>
      </Router>
    );
  }
}

export default Account;

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Account />, document.getElementById('dashboard'));
}
