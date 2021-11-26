import React, { useState, useEffect } from "react";
import "./Exchanges.scss";
import { useSelector } from "react-redux";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import TableContent from "./TableContent";
function Exchanges() {
  const respon = useSelector((state) => state.cryptoExchng);
  const [exchanges, setexchanges] = useState([]);
  useEffect(() => {
    setexchanges(respon?.data?.exchanges);
  }, [respon]);
  return (
    <div className="exchangePage">
      <div className="rowhead">
        <strong>No.</strong>
        <strong>Icon</strong>
        <strong>Exchanges</strong>
        <strong>24h Trade Volume</strong>
        <strong>Markets</strong>
        <strong>Change</strong>
      </div>
      <div className="exchangeDiv">
        {exchanges.map((dat) => (
          <TableContent
            rank={dat?.rank}
            iconUrl={dat?.iconUrl}
            name={dat?.name}
            volume={dat?.volume}
            numberOfMarkets={dat?.numberOfMarkets}
            marketShare={dat?.marketShare}
            description={dat?.description}
          />
        ))}
      </div>
      <br />
      <br /> <br />
    </div>
  );
}

export default Exchanges;
