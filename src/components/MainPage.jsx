import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CoinContext } from "./CoinState";

function MainPage() {
  const { favorites, setFavorites } = useContext(CoinContext);
  const [coin, setCoin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!coin) {
      setError("Please enter a coin name");
      return;
    }
    setFavorites([...favorites, coin]);
    setCoin("");
    setError("");
    navigate("/coin_info");
  };

  return (
    <div className="wrapper">
      <h1 className="title">Crypto Tracker</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form_group">
          <label className="label">Favorite Coin</label>
          <input
            type="text"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
            placeholder="e.g., Bitcoin"
            className="input"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn">
          Add Coin
        </button>
      </form>
      {favorites.length > 0 && (
        <div className="card">
          <h2 className="subtitle">Your Favorites</h2>
          <ul className="list">
            {favorites.map((c, i) => (
              <li key={i} className="item">
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MainPage;
