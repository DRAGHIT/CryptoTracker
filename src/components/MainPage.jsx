import React, { useContext } from "react";
import { CoinContext } from "./CoinState";
import CryptoGraph from "./CryptoGraph";

const MainPage = () => {
  const { favorites } = useContext(CoinContext);

  const graphCoinId =
    favorites.length > 0 ? favorites[0].toLowerCase() : "bitcoin";

  return (
    <div className="main-page-container">
      <h1 className="page-title">Welcome to the Crypto Dashboard</h1>
      <div className="content-section">
        <h2 className="section-title">Your Favorite Coins:</h2>
        <ul className="favorites-list">
          {favorites.length > 0 ? (
            favorites.map((coin, index) => (
              <li key={index} className="favorite-item">
                {coin}
              </li>
            ))
          ) : (
            <p className="no-favorites">No favorite coins added yet.</p>
          )}
        </ul>
        <div className="graph-section">
          <CryptoGraph coinId={graphCoinId} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
