import React from "react";
import { Link } from "react-router-dom";
import postr from "../../Assets/Presentation1.jpg";
import videobg2 from "../../Assets/cmpl.mp4";
import "./LandingPage.scss";
function LandingPage() {
  return (
    <div className="cryptoNews">
      <video
        poster={postr}
        loop
        muted
        src={videobg2}
        controls={false}
        autoPlay={true}
      />
      <div className="display">
        <h1>Crypto News</h1>
        <p>
          All about crypto currency.Price , News , Description and other
          Information.
        </p>

        <div className="rowCont">
          <a className="linkbutton" href="https://jawadraza-c270f.web.app">
            About Me
          </a>
          <Link className="linkbutton" to="/home">
            read news
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
