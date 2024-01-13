import React from "react";
import "../Discover/Discover.css";
import image1 from "../Discover/assets/image1.png";
import image2 from "../Discover/assets/image2.png";
import image3 from "../Discover/assets/image3.png";
import image4 from "../Discover/assets/image4.png";
import image5 from "../Discover/assets/image5.png";

import { Link } from "react-scroll";

const Discover = () => {
  return (
    <div className="discover-container">
      <h1 className="discover-heading">Discover Our Range of Services</h1>
      <div className="cards">
        <div className="card-box">
          <Link
            activeClass="active"
            to="first-card"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <img src={image1} alt="image1" className="card-img" />
            <div className="card-text">
              Developing and Managing Sports Infrastructure
            </div>
          </Link>
        </div>
        <div className="card-box">
          <Link
            activeClass="active"
            to="second-card"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="cursor"
          >
            <img src={image2} alt="image2" className="card-img" />
            <div className="card-text">
              Developing and Managing Sports Infrastructure
            </div>
          </Link>
        </div>
        <div className="card-box">
          <Link
            activeClass="active"
            to="third-card"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <img src={image3} alt="image3" className="card-img" />
            <div className="card-text">
              Developing and Managing Sports Infrastructure
            </div>
          </Link>
        </div>
        <div className="card-box">
          <Link
            activeClass="active"
            to="fourth-card"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <img src={image4} alt="image4" className="card-img" />
            <div className="card-text">
              Developing and Managing Sports Infrastructure
            </div>
          </Link>
        </div>
        <div className="card-box">
          <Link
            activeClass="active"
            to="fifth-card"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <img src={image5} alt="image5" className="card-img" />
            <div className="card-text">
              Developing and Managing Sports Infrastructure
            </div>
          </Link>
        </div>

        <div className="Read-More">Read More</div>
      </div>
    </div>
  );
};

export default Discover;
