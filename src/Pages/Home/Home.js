import React from "react";
import "./Home.scss";
import { useSelector } from "react-redux";
import millify from "millify";
import { Link } from "react-router-dom";
import CryptoCurrencies from "../CryptoCurrencies/CryptoCurrencies";
import News from "../News/News";
function Home() {
  const { data } = useSelector((state) => state.cryptoApi);
  return (
    <div className="homepage">
      <h1 className="title">Global Crypto Stats</h1>
      <div className="gridSystem">
        <div className="globalstatItem">
          <span>Total Crypto Currencies</span>
          <p>{data.stats.total}</p>
        </div>
        <div className="globalstatItem">
          <span>Total Exchanges</span>
          <p>{millify(data.stats.totalExchanges)}</p>
        </div>
        <div className="globalstatItem">
          <span>Total Market Cap</span>
          <p>{millify(data.stats.totalMarketCap)}</p>
        </div>
        <div className="globalstatItem">
          <span>Total 24H Volume</span>
          <p>{millify(data.stats.total24hVolume)}</p>
        </div>
        <div className="globalstatItem">
          <span>Total Markets</span>
          <p>{millify(data.stats.totalMarkets)}</p>
        </div>
      </div>
      <div className="gridSystem">
        <h1 className="title">Top 10 Crypto Currencies</h1>
        <Link to="/cryptoCurrency">Show More</Link>
      </div>
      <CryptoCurrencies simplified={true} />
      <div className="gridSystem">
        <h1 className="title">Latest Crypto News</h1>
        <Link to="/news">Show More</Link>
      </div>
      <News simplified />
    </div>
  );
}

export default Home;
