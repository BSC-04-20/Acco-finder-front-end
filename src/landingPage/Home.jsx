import "./Home.css";
import img3 from "./zomba.jpeg";
import React, { useState, useEffect } from 'react';


const Home = () => {
    return (
        <section className="home">
        <div className="overlay">
          <div className="img">
            <img src={img3} alt="" />
          </div>

          <div className="homeContent container">
            <div className="textDiv">
              <span className="smallText">
                Find Accomodation
              </span>
              <h1 className="homeTitle">
                AccoFinder cares about your living
              </h1>
            </div>
          </div>
          </div>
      </section>
    )
}

export default Home