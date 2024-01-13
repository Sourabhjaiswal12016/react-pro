import React from "react";
import "../AllCards/CardThree.css";
import Cardthree from "../Discover/assets/card3.png";
const CardThree = () => {
  return (
    <section id="third-card">
      <div className="card-one-conatainer">
        <div className="left-one">
          <img src={Cardthree} className="card-one-img" />
        </div>
        <div className="right-one">
          <div className="Heading-Text">SPORTS INFRASTRUCTURE & MANAGEMENT</div>
          <div className="Description">
            Deuce Sports Infra is committed to providing top-tier sports
            infrastructure development services. We understand that every client
            is unique, which is why we offer a range of tailored solutions to
            meet specific requirements. Our team takes into consideration the
            availability of space, funds, and coaching programs when developing
            sports infrastructure. We believe that a successful sports facility
            is not just about having the latest technology but also about
            creating a space that is conducive to growth, development, and
            success
          </div>
          <div>
            <button className="ReachOut">Reach Out</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardThree;
