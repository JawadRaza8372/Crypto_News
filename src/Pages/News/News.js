import React, { useState, useEffect } from "react";
import MyCardNews from "../../Components/NewsCard/MyCardNews";
import "./News.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../Services/CryptoApi";
import { setNews } from "../../store/cryptoNws";
function News({ simplified }) {
  const { news } = useSelector((state) => state.cryptoNws);
  const { data } = useSelector((state) => state.cryptoApi);
  const dispatch = useDispatch();
  const [newsCategory, setnewsCategory] = useState("");

  useEffect(() => {
    const fetchNewsItem = async (categ) => {
      const news = await fetchNews(categ);
      if (news?.data) {
        dispatch(setNews({ news: news?.data.value }));
      } else {
        console.log(news.error);
      }
    };
    fetchNewsItem(newsCategory);
  }, [newsCategory, dispatch]);
  return (
    <div
      className="mainNewsdiv"
      style={simplified ? { padding: "0px 0px" } : {}}
    >
      {!simplified && (
        <div className="inputcontainer">
          <select type="" onChange={(e) => setnewsCategory(e.target.value)}>
            <option defaultValue>Cryptocurrency</option>
            {data?.coins?.map((coin) => (
              <option>{coin.name}</option>
            ))}
          </select>
        </div>
      )}
      <div
        className="newsItems"
        style={
          simplified
            ? {
                height: "90%",
                padding: "0px !important",
                marginBottom: "20px",
              }
            : {}
        }
      >
        {simplified &&
          news?.slice(0, 8).map((newf) => (
            <>
              <MyCardNews
                imglink={
                  newf?.image?.thumbnail?.contentUrl
                    ? newf?.image?.thumbnail?.contentUrl
                    : "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"
                }
                title={`${newf.name}`}
                url={newf.url}
              />
            </>
          ))}
        {!simplified &&
          news?.map((newf) => (
            <>
              <MyCardNews
                imglink={
                  newf?.image?.thumbnail?.contentUrl
                    ? newf?.image?.thumbnail?.contentUrl
                    : "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"
                }
                title={`${newf.name}`}
                url={newf.url}
              />
            </>
          ))}
      </div>
    </div>
  );
}

export default News;
