import React, { useState, useEffect } from "react";
import "./AnimatedSideBar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import LinkButton from "./LinkButton";
import Cryptologo from "../../Assets/logo.png";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PageHeader from "../PageHeader/PageHeader";
import { useHistory } from "react-router";
function AnimatedSideBar({ children }) {
  const [expand, setexpand] = useState(false);
  const [activeLogo, setactiveLogo] = useState(false);
  const [screenSize, setscreenSize] = useState(null);
  const location = useHistory();
  const pagelocation = useHistory().location.pathname;
  useEffect(() => {
    const handleResize = () => {
      setscreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize);
    };
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize < 480) {
      setactiveLogo(true);
    } else {
      setactiveLogo(false);
    }
  }, [screenSize]);
  return (
    <>
      {pagelocation === "/home" ||
      pagelocation === "/news" ||
      pagelocation === "/exchange" ||
      pagelocation === "/cryptoCurrency" ||
      pagelocation.includes("/coinDetail/") ? (
        <section className="mainContainer">
          <div className={expand ? "sidebar active" : "sidebar"}>
            <div className="logoContent">
              <div className="logo">
                <img src={Cryptologo} id="logoicon" alt="crypto News" />
                <div className="logoName">Crypto News</div>
              </div>
              {expand && !activeLogo ? (
                <CloseIcon id="menuIcon" onClick={() => setexpand(false)} />
              ) : !expand && !activeLogo ? (
                <MenuIcon id="menuIcon" onClick={() => setexpand(true)} />
              ) : activeLogo ? (
                <img
                  src={Cryptologo}
                  onClick={() => {
                    location.push("/");
                  }}
                  id="logoImg"
                  alt="crypto News"
                />
              ) : null}
            </div>
            <ul className="navList">
              <li>
                <LinkButton title="Home" link="/home">
                  <HomeIcon id="navIcon" />
                </LinkButton>
              </li>
              <li>
                <LinkButton title="Crypto Currencies" link="/cryptoCurrency">
                  <TimelineOutlinedIcon id="navIcon" />
                </LinkButton>
              </li>
              <li>
                <LinkButton title="Exchange" link="/exchange">
                  <AccountBalanceIcon id="navIcon" />
                </LinkButton>
              </li>
              <li>
                <LinkButton title="News" link="/news">
                  <LightbulbIcon id="navIcon" />
                </LinkButton>
              </li>
            </ul>
            <div className="profileContent">
              <img
                onClick={() => {
                  location.push("/");
                }}
                src={Cryptologo}
                alt="crypto News"
              />
            </div>
          </div>
          <div
            className={
              expand ? "mainContentContainer active" : "mainContentContainer"
            }
          >
            <PageHeader />
            <div className="childrenDev">{children}</div>
          </div>
        </section>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default AnimatedSideBar;
