import { useState, useEffect } from "react";

function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GNEWS_KEY;
    if (!apiKey) {
      // Mock data if no API key
      setNews([
        {
          title: "Global Trade Disrupted by New Tariff Policies",
          date: "2025-04-20",
        },
        {
          title: "US Economy Faces Volatility Amid Policy Shifts",
          date: "2025-04-19",
        },
        {
          title: "India’s Stock Market Outperforms Global Peers",
          date: "2025-04-18",
        },
        {
          title: "IMF Warns of Slower Global Growth Due to Trade Wars",
          date: "2025-04-17",
        },
        {
          title: "Corporate Earnings to Test Market Resilience",
          date: "2025-04-16",
        },
      ]);
      setLoading(false);
      return;
    }

    fetch(
      `https://gnews.io/api/v4/search?q=economy&lang=en&max=5&token=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setNews(
            data.articles.map((item) => ({
              title: item.title,
              date: new Date(item.publishedAt).toISOString().split("T")[0],
            }))
          );
        } else {
          setError("No news data available");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch news");
        setLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <h1 className="title">Economy News</h1>
      {loading ? (
        <p className="loading">Loading news...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : news.length ? (
        <ul className="list">
          {news.map((item, i) => (
            <li key={i} className="item">
              <strong>{item.title}</strong> - {item.date}
            </li>
          ))}
        </ul>
      ) : (
        <p className="loading">No news available</p>
      )}
    </div>
  );
}

export default NewsPage;
