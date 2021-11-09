import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/NavBar.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };

  }

  render(){
    return (
        <div>
          <Navbar />
          <About />
          <Footer />
        </div>

    );
  }

}

export default App;

if (document.getElementById('reactApp')) {
    ReactDOM.render(<App />, document.getElementById('reactApp'));
}
