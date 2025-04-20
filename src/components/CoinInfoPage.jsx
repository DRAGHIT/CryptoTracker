import { useState, useEffect, useContext } from "react";
import { CoinContext } from "./CoinState";

function CoinInfoPage() {
  const { favorites } = useContext(CoinContext);
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,dogecoin"
    )
      .then((res) => res.json())
      .then((data) => {
        setMarketData(
          data.map((coin) => ({
            name: coin.name,
            price: `$${coin.current_price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`,
            change: `${coin.price_change_percentage_24h.toFixed(2)}%`,
          }))
        );
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch market data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <h1 className="title">Crypto Market</h1>
      {loading ? (
        <p className="loading">Loading market data...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : marketData.length ? (
        <ul className="list">
          {marketData.map((coin, i) => (
            <li
              key={i}
              className={`item ${
                favorites.includes(coin.name) ? "favorite" : ""
              }`}
            >
              {coin.name}: {coin.price} ({coin.change})
            </li>
          ))}
        </ul>
      ) : (
        <p className="loading">No market data available</p>
      )}
    </div>
  );
}

export default CoinInfoPage;
