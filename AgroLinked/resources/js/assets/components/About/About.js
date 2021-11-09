import React from 'react';
import ReactDOM from 'react-dom';

class About extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <main className="text-dark">
        <h2>AgroLinked was made for the farmer</h2>
        <p>All of the features can be used by a farmer in order to make his work planing more easy.</p>

        <h3>Calender notifications</h3>
        <p>Plan your work and forget!<br/>
        We will remind you when the time comes!</p>

        <h3>Weather reports</h3>
        <p>Do you have a weather sensitive task like spinkling or wataring?<br/>
        Our app will inform you for any weather changes in time!</p>

        <h3>Keep you finances in order</h3>
        <p>Have you bought something, paid a worker, or got yourself paid?<br/>
        Keep every expences and income in order.<br/>
        Always track your finances anywere anytime.</p>

        <h3>Know your harverst yields</h3>
        <p>Keep track of your harverst yield every year.<br/>
        Know which acres profited you the most and which did not.</p>


      </main>

    );
  }

}

export default About;
