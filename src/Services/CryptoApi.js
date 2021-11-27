import axios from "axios";
const baseUrl = "https://coinranking1.p.rapidapi.com";
const rapiHost = "coinranking1.p.rapidapi.com";
const rapikey = "cb558a912cmsh1ef4b63c1b8a09fp1eeb68jsna7e4b3133018";
const fetchSpecCoin = async (coinid) => {
  var options = {
    method: "GET",
    url: `${baseUrl}/coin/${coinid}`,
    headers: {
      "x-rapidapi-host": `${rapiHost}`,
      "x-rapidapi-key": `${rapikey}`,
    },
  };

  let responce = await axios.request(options);
  if (responce.statusText === "OK") {
    return { data: responce?.data?.data, error: null };
  } else {
    return { data: null, error: "something went wrong" };
  }
};
const fetchCoinHistory = async (coinid, time) => {
  var options = {
    method: "GET",
    url: `${baseUrl}/coin/${coinid}/history/${time}`,
    headers: {
      "x-rapidapi-host": `${rapiHost}`,
      "x-rapidapi-key": `${rapikey}`,
    },
  };

  let responce = await axios.request(options);
  if (responce.statusText === "OK") {
    return { data: responce?.data?.data, error: null };
  } else {
    return { data: null, error: "something went wrong" };
  }
};
const fetchGlobalStats = async () => {
  var options = {
    method: "GET",
    url: `${baseUrl}/coins?limit=100`,
    headers: {
      "x-rapidapi-host": `${rapiHost}`,
      "x-rapidapi-key": `${rapikey}`,
    },
  };
  let responce = await axios.request(options);
  if (responce.statusText === "OK") {
    return { data: responce?.data?.data, error: null };
  } else {
    return { data: null, error: "something went wrong" };
  }
};
const fetchNews = async (category) => {
  const newsCategory = category ? category : "Cryptocurrency";

  var optionsNews = {
    method: "GET",
    url: `https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}`,
    params: { safeSearch: "Off", textFormat: "Raw" },
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": `${rapikey}`,
    },
  };
  let responce = await axios.request(optionsNews);
  if (responce.statusText === "OK") {
    return { data: responce?.data, error: null };
  } else {
    return { data: null, error: "something went wrong" };
  }
};
const fetchExchanges = async () => {
  var options = {
    method: "GET",
    url: `${baseUrl}/exchanges`,
    headers: {
      "x-rapidapi-host": `${rapiHost}`,
      "x-rapidapi-key": `${rapikey}`,
    },
  };

  let responce = await axios.request(options);
  if (responce.statusText === "OK") {
    return { data: responce?.data?.data, error: null };
  } else {
    return { data: null, error: "something went wrong" };
  }
};
export default fetchGlobalStats;
export { fetchNews, fetchSpecCoin, fetchCoinHistory, fetchExchanges };
