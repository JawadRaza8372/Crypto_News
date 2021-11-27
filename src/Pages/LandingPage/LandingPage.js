import React from "react";
import { Link } from "react-router-dom";
import postr from "../../Assets/Presentation1.jpg";
import videobg2 from "../../Assets/cmpl.mp4";
import loader from "../../Assets/loader.gif";
import "./LandingPage.scss";
import { useSelector } from "react-redux";
function LandingPage() {
  const resp = useSelector((state) => state.cryptoApi);

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
          All about crypto currency. Price , news , description and other
          Information.
        </p>

        <div className="rowCont">
          <a className="linkbutton" href="https://jawadraza-c270f.web.app">
            About Me
          </a>
          {resp?.data ? (
            <Link className="linkbutton" to="/home">
              read news
            </Link>
          ) : (
            <img
              style={{ width: "35px", height: "35px", margin: "0 auto" }}
              src={loader}
              alt="loading"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
