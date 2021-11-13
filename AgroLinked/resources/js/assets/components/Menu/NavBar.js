import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-custom sticky-top">
        <div className="container-fluid">

          <Link className="navbar-brand text-dark fw-bold fs-3 ms-3" to ="/">AgroLinked</Link>

          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse navbar-left fs-4" id="navbarMenu">
            <ul className="nav navbar-nav me-auto ms-4">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>

            <ul className="nav navbar-nav">
              <li className="btn-nav">
                <a className="btn btn-primary btn-small navbar-btn me-2" href="/login">Log In</a>
              </li>
              <li className="btn-nav">
                <a className="btn btn-primary btn-small navbar-btn me-4" href="/register">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

export default Navbar;
