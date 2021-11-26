import React from "react";
import { useLocation } from "react-router";
import "./PageHeader.scss";
function PageHeader() {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div className="pageHeader">
      <h1>
        {location === "/home"
          ? "Home"
          : location === "/news"
          ? "News"
          : location.includes("/coinDetail/")
          ? `Coin Details / ${location.replace("/coinDetail/", "")}`
          : location === "/exchange"
          ? "Exchange"
          : location === "/cryptoCurrency"
          ? "Crypto Currencies"
          : null}
      </h1>
    </div>
  );
}

export default PageHeader;
