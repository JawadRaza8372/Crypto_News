import RoutingFile from "./Navigation/RoutingFile";
import fetchGlobalStats, {
  fetchNews,
  fetchExchanges,
} from "./Services/CryptoApi";
import { setData } from "./store/cryptoApi";
import { setNews } from "./store/cryptoNws";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setExchnage } from "./store/cryptoExchng";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchdata = async () => {
      const projects = await fetchGlobalStats();
      if (projects.data) {
        dispatch(setData({ data: projects.data }));
      } else {
        console.log(projects.error);
      }
    };
    const fetchNewsItem = async () => {
      const news = await fetchNews();
      if (news?.data) {
        dispatch(setNews({ news: news?.data.value }));
      } else {
        console.log(news.error);
      }
    };
    const fetchExchang = async () => {
      const rsp = await fetchExchanges();
      if (rsp.data) {
        dispatch(setExchnage({ data: rsp.data }));
      } else {
        console.log(rsp.error);
      }
    };
    fetchExchang();
    fetchdata();
    fetchNewsItem();
  }, [dispatch]);
  return (
    <>
      <RoutingFile />
    </>
  );
}

export default App;
