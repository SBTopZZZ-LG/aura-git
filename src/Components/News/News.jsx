import { useEffect, useState } from "react";
import api from "../../Utils/axios.config";
import parse from "html-react-parser";
import "./News.css";
import { errorToast } from "../../Utils/Toasts/Toasts";

const News = () => {
  let paginationT = null;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getNews();
  }, []);

  const getNews = async () => {
    await api
      .get("/news", {
        paginationT,
      })
      .then((res) => {
        const { data } = res.data;
        setNews([...news, ...data.results]);
        if (data.paginationTs !== null) {
          paginationT = data.paginationTs;
          getNews();
        } else {
          paginationT = null;
        }
        setLoading(false);
      })
      .catch((err) => {
        errorToast("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="h-screen grid lg:grid-cols-3 grid-cols-1 place-content-start md:bg-contain bg-no-repeat bg-cover md:bg-left bg-right py-5 form-container bg-schedule bg-schedulec w-screen user-none bg-scroll overflow-scroll [&::-webkit-scrollbar]:hidden">
      <div className="align-middle md:col-start-2 col-span-2 rounded-lg grid justify-items-stretch p-5 w-11/12">
        <h1 className="text-3xl text-center text-black font-bold mb-5">News</h1>
        <div className="w-full flex flex-col items-center">
          {loading && (
            <div className="glass w-full p-4 rounded-lg text-lg text-center my-2">
              <p className="highlight">Loading...</p>
            </div>
          )}
          {!loading && news.length === 0 && (
            <div className="glass w-full p-4 rounded-lg text-lg text-center my-2">
              <p className="highlight">Nothing here yet!</p>
            </div>
          )}
          {news.map((news) => {
            return (
              <div className="glass w-full p-4 rounded-lg text-lg text-center my-2">
                {parse(news.content)}
                <p className="w-full text-sm text-black text-right">
                  {news.edited_at
                    ? new Date(news.edited_at).toLocaleString("en-IN", {
                        day: "numeric",
                        month: "short",
                        hour: "numeric",
                        minute: "numeric",
                      })
                    : new Date(news.posted_at).toLocaleString("en-IN", {
                        day: "numeric",
                        month: "short",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
