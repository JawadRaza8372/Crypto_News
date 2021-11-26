import React from "react";
import "./MyCard.scss";
import millify from "millify";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
function MyCard({ imglink, title, price, marketCap, Change, color, rank }) {
  return (
    <div className="card" style={{ "--color": color ? `${color}` : "black" }}>
      <div className="titlediv">
        <h2 style={{ "--color": `${color}` }}>{title}</h2>
        <img src={imglink} alt={title} />
      </div>
      <p>Price:{millify(price)}</p>
      <p>Market Cap:{millify(marketCap)}</p>
      <p>Daily Change:{Change} %</p>
      <Link className="moreinfo" to={`/coinDetail/${rank}`}>
        <InfoIcon id="icon" />
      </Link>
    </div>
  );
}

export default MyCard;
