import React from "react";
import CryptoGraph from "./CryptoGraph";

const CoinInfoPage = ({ coinId = "bitcoin" }) => {
  return (
    <div className="coin-info-container">
      <h1 className="page-title">Crypto Details</h1>
      <CryptoGraph coinId={coinId} />
      {/* Add other content here, e.g., price, market cap */}
    </div>
  );
};

export default CoinInfoPage;
