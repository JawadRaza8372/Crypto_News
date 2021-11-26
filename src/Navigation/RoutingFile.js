import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import AnimatedSideBar from "../Components/AnimatedSideBar/AnimatedSideBar";
import CryptoCurrencies from "../Pages/CryptoCurrencies/CryptoCurrencies";
import Exchanges from "../Pages/Exchanges/Exchanges";
import Home from "../Pages/Home/Home";
import LandingPage from "../Pages/LandingPage/LandingPage";
import { useSelector } from "react-redux";
import News from "../Pages/News/News";
import CoinDetailPage from "../Pages/CoinDetailPage/CoinDetailPage";
let DataRoute = ({ children, ...res }) => {
  const { data } = useSelector((state) => state.cryptoApi);
  return (
    <Route
      {...res}
      render={() => {
        return !data ? <Redirect to="/" /> : children;
      }}
    ></Route>
  );
};
function RoutingFile() {
  const location = useLocation().pathname;
  return (
    <>
      {location === "/" ? (
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          <Route component={Home} />
        </Switch>
      ) : (
        <AnimatedSideBar>
          <Switch>
            <DataRoute exact path="/home">
              <Home />
            </DataRoute>
            <DataRoute exact path="/coinDetail/:coinid">
              <CoinDetailPage />
            </DataRoute>
            <DataRoute exact path="/news">
              <News />
            </DataRoute>
            <DataRoute exact path="/exchange">
              <Exchanges />
            </DataRoute>
            <DataRoute exact path="/cryptoCurrency">
              <CryptoCurrencies />
            </DataRoute>
          </Switch>
        </AnimatedSideBar>
      )}
    </>
  );
}

export default RoutingFile;
