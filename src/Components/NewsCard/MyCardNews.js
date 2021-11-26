import React from "react";
import "./MyCardNews.scss";
function MyCardNews({ imglink, title, url }) {
  return (
    <a href={`${url}`} className="newscard">
      <img src={imglink} alt={title} />
      <div>
        <h4>{title}</h4>
      </div>
    </a>
  );
}

export default MyCardNews;
