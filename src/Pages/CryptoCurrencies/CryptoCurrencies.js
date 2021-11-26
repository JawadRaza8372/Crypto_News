import React, { useEffect, useState } from "react";
import "./CryptoCurrencies.scss";
import { useSelector } from "react-redux";
import millify from "millify";
import MyCard from "../../Components/MyCard/MyCard";
function CryptoCurrencies({ simplified }) {
  const [currencyTerm, setCurrencyTerm] = useState("");
  const { data } = useSelector((state) => state.cryptoApi);
  const [coins, setcoins] = useState([]);
  const [coinsSimpl, setcoinsSimpl] = useState([]);

  useEffect(() => {
    const filterdata = data?.coins?.filter((coin) =>
      coin.name.toLowerCase().includes(currencyTerm.toLowerCase())
    );
    setcoins(filterdata);
    if (coins) {
      setcoinsSimpl();
    }
  }, [data, currencyTerm]);

  return (
    <>
      <div
        className="mainCryptodiv"
        style={simplified ? { height: "100vh", padding: "0px 0px" } : {}}
      >
        {!simplified && (
          <div className="inputcontainer">
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setCurrencyTerm(e.target.value)}
            />
          </div>
        )}
        <div
          className="cryptoCoins"
          style={simplified ? { height: "100vh", padding: "10px 0px" } : {}}
        >
          {simplified &&
            coins?.slice(0, 10).map((coin) => (
              <>
                <MyCard
                  imglink={coin.iconUrl}
                  title={`${coin.rank}. ${coin.name}`}
                  price={coin.price}
                  marketCap={coin.marketCap}
                  Change={coin.change}
                  color={coin.color}
                  rank={coin.rank}
                />
              </>
            ))}
          {!simplified &&
            coins?.map((coin) => (
              <>
                <MyCard
                  imglink={coin.iconUrl}
                  title={`${coin.rank}. ${coin.name}`}
                  price={coin.price}
                  marketCap={coin.marketCap}
                  Change={coin.change}
                  color={coin.color}
                  rank={coin.rank}
                />
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default CryptoCurrencies;
