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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
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
        </Switch>
      ) : (
        <>
          <AnimatedSideBar
            children={
              <Switch>
                <DataRoute exact={true} path="/home">
                  <Home />
                </DataRoute>
                <DataRoute exact={true} path="/coinDetail/:coinid">
                  <CoinDetailPage />
                </DataRoute>
                <DataRoute exact={true} path="/news">
                  <News />
                </DataRoute>
                <DataRoute exact={true} path="/exchange">
                  <Exchanges />
                </DataRoute>
                <DataRoute exact={true} path="/cryptoCurrency">
                  <CryptoCurrencies />
                </DataRoute>
                <Route exact={true} component={ErrorPage} />
              </Switch>
            }
          />
        </>
      )}
    </>
  );
}

export default RoutingFile;
