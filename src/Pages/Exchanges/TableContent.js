import React, { useState } from "react";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
function TableContent({
  rank,
  iconUrl,
  name,
  volume,
  numberOfMarkets,
  marketShare,
  description,
}) {
  const [expand, setexpand] = useState(false);
  console.log(description);
  return (
    <>
      <div className="row" onClick={() => setexpand(!expand)}>
        <strong>
          {rank ? rank : ""} {". "}
        </strong>
        <img id="tablecoinIcon" src={iconUrl} alt={name} />
        <strong>{name ? name : ""}</strong>
        <span>{volume ? millify(volume) : ""}</span>
        <span id="secndSpan">
          {numberOfMarkets ? millify(numberOfMarkets) : ""}
        </span>
        <span>{marketShare ? millify(marketShare) : ""}</span>
      </div>
      {expand && description && HTMLReactParser(description)}
    </>
  );
}

export default TableContent;
