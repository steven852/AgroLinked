import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <div class="navbar-header">
            <Link to="/" class="navbar-brand">AgroLinked</Link>
          </div>

          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse navbar-left" id="navbarMenu">
            <ul class="nav navbar-nav me-auto">
              <li class="nav-item">
                <Link to="/" class="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/product" class="nav-link">Product</Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link">Contact Us</Link>
              </li>
            </ul>

            <ul class="nav navbar-nav">
              <li>
                <div class="btn-nav">
                  <Link class="btn btn-primary btn-small navbar-btn" to="/signin">Sign In</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <br></br>
      <br></br>
    </div>

  )
}

export default Navbar
