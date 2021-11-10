import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <main className="text-dark">
        <div className="bg-home-first home-position-first">
          <h1 className="fw-bold fade-out">Never forget your plans.</h1>
        </div>

        <div className="bg-home-second home-position-second">
          <h3>Not just a simple calendar app</h3>
          <p>AgroLinked was developed specifically to assist farmers in organising their workflow.<br/>
          It offers more than just calendar notifications. <br/>
          Use other features like weather report and more.</p>
          <br/>
          <br/>
          <h3>Modernize your planing</h3>
          <p>Get rid of your old methods of planing.<br/>
          Most people underutilize the power of technology.<br/>
          Keep your work organized in the palm of your hand</p>
          <br/>
          <br/>
          <h3>Keep track of your past actions</h3>
          <p>Need to rember something that happened?<br/>
          Just look it up in your account!</p>
          <br/>
          <br/>
          <h3>Learn more <Link to="/about">here</Link></h3>
        </div>

      </main>

    );
  }

}

export default Home;
