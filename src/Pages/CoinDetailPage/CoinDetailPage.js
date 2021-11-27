import React, { useEffect, useState } from "react";
import "./CoinDetailPage.scss";
import RowContent from "./RowContent";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Grid3x3OutlinedIcon from "@mui/icons-material/Grid3x3Outlined";
import BoltIcon from "@mui/icons-material/Bolt";
import InsightsIcon from "@mui/icons-material/Insights";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalance from "@mui/icons-material/AccountBalance";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import LineChart from "../../Components/LineChartComp/LineChart";
import { fetchCoinHistory } from "../../Services/CryptoApi";
function CoinDetailPage() {
  const [coinHistory, setcoinHistory] = useState(null);
  const [timeStamp, settimeStamp] = useState(null);

  const { coinid } = useParams();
  const { data } = useSelector((state) => state.cryptoApi);
  const coins = data?.coins;
  const result =
    coins &&
    coins.find((con) => {
      return `${con.rank}` === `${coinid}`;
    });
  const time = ["24h", "7d", "30d", "1y", "5y"];

  useEffect(() => {
    const fetchHistory = async () => {
      if (result) {
        const rsp = await fetchCoinHistory(result?.rank, "5y");
        if (rsp?.data) {
          setcoinHistory(rsp?.data);
        }
      }
    };
    fetchHistory();
  }, [result]);
  useEffect(() => {
    const fetchHistory2 = async (period) => {
      if (result) {
        const rsp = await fetchCoinHistory(result?.rank, period);
        if (rsp?.data) {
          setcoinHistory(rsp?.data);
        }
      }
    };
    if (timeStamp) {
      fetchHistory2(timeStamp);
    }
  }, [timeStamp, result]);
  return (
    <div className="coinDetailsMain">
      <h1 style={{ "--color": result?.color ? result?.color : "black" }}>
        {result?.name} ( {result?.slug} ) price
      </h1>
      <p>
        {result?.name} live price in US Dollars.View Value Statistics , market
        cap and supply.
      </p>
      <LineChart
        coinHistory={coinHistory}
        currentPrice={result?.price ? millify(result?.price) : ""}
        coinName={result?.name}
        color={result?.color ? result?.color : "black"}
      />
      <div className="inputcontainer">
        <select
          defaultValue="5y"
          onChange={(e) => settimeStamp(e.target.value)}
        >
          {time.map((tim) => (
            <option>{tim}</option>
          ))}
        </select>
      </div>
      <div className="coinDetailGrid">
        <div className="coinsStats">
          <h1 style={{ "--color": result?.color ? result?.color : "black" }}>
            {result?.name} Value Statistics
          </h1>
          <p>An overview showing the stats of {result?.name}.</p>
          <RowContent
            title="Price to USD"
            value={result?.price ? millify(result?.price) : ""}
          >
            <MonetizationOnOutlinedIcon id="icon" />
          </RowContent>
          <RowContent title="Rank" value={result?.rank}>
            <Grid3x3OutlinedIcon id="icon" />
          </RowContent>
          <RowContent
            title="24h Volume"
            value={result?.volume ? millify(result?.volume) : ""}
          >
            <BoltIcon id="icon" />
          </RowContent>
          <RowContent
            title="Market Cap"
            value={result?.marketCap ? millify(result?.marketCap) : ""}
          >
            <MonetizationOnOutlinedIcon id="icon" />
          </RowContent>
          <RowContent
            title="Daily Avg."
            value={
              result?.allTimeHigh.price
                ? millify(result?.allTimeHigh.price)
                : ""
            }
          >
            <BarChartIcon id="icon" />
          </RowContent>
        </div>
        <div className="coinsStats">
          <h1 style={{ "--color": result?.color ? result?.color : "black" }}>
            Other Statistics
          </h1>
          <p>An overview showing the other stats of {result?.name}.</p>
          <RowContent
            title="No. of Markets"
            value={
              result?.numberOfMarkets ? millify(result?.numberOfMarkets) : ""
            }
          >
            <InsightsIcon id="icon" />
          </RowContent>
          <RowContent
            title="No. of Exchanges"
            value={
              result?.numberOfExchanges
                ? millify(result?.numberOfExchanges)
                : ""
            }
          >
            <AccountBalance id="icon" />
          </RowContent>
          <RowContent
            title="Approved Supply"
            term={result?.approvedSupply ? `${result?.approvedSupply}` : null}
          >
            <ErrorOutlineIcon id="icon" />
          </RowContent>
          <RowContent
            title="Total Supply"
            value={result?.totalSupply ? millify(result?.totalSupply) : ""}
          >
            <ErrorOutlineIcon id="icon" />
          </RowContent>
          <RowContent
            title="Circulating Supply"
            value={
              result?.circulatingSupply
                ? millify(result?.circulatingSupply)
                : ""
            }
          >
            <ErrorOutlineIcon id="icon" />
          </RowContent>
        </div>
      </div>

      <div className="finalContent">
        <h1 style={{ "--color": result?.color ? result?.color : "black" }}>
          what is {result?.name} ??
        </h1>
        <p>{result?.description && HTMLReactParser(result?.description)}</p>
        <a href={`${result?.websiteUrl}`}>
          <h1 style={{ "--color": result?.color ? result?.color : "black" }}>
            Visit {result?.name} Website
          </h1>
        </a>
      </div>
    </div>
  );
}

export default CoinDetailPage;
