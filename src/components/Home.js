// Home.js
import React from 'react';
import './Home.css';
import frisbeeImage from '../images/frisbee.jpg'; // Adjust path if needed
import surfingImage from '../images/surfing.jpg'; // Adjust path if needed
import hikingImage from '../images/hiking.jpg'; // Adjust path if needed

function Home() {
  return (
    <div className="home">
      <div className="card-container">
        <div className="card card1">
          <img src={frisbeeImage} alt="Frisbee" className="card-image" />
          <h2>Frisbee</h2>
          <p>Enjoy playing Frisbee with friends.</p>
        </div>
        <div className="card card2">
          <img src={surfingImage} alt="Surfing" className="card-image" />
          <h2>Surfing</h2>
          <p>Catch some waves and have fun.</p>
        </div>
        <div className="card card3">
          <img src={hikingImage} alt="Hiking" className="card-image" />
          <h2>Hiking</h2>
          <p>Explore beautiful trails.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
