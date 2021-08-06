import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Footer from './components/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
           <About />
          </Route>

          <Route exact path="/product">
            <Product />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/signin">
            <Signin />
          </Route>

        </Switch>
      <Footer />
    </Router>
  );
}



export default App
