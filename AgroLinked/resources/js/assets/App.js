import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Menu/NavBar.js';
import Footer from './components/Menu/Footer.js';
import Home from './components/Menu/Home.js';
import About from './components/Menu/About.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };

  }

  render(){
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
          <Footer />
        </Router>
    );
  }

}

export default App;

if (document.getElementById('reactApp')) {
    ReactDOM.render(<App />, document.getElementById('reactApp'));
}
