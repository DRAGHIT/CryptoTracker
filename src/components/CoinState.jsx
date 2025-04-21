import React, { createContext, useState } from "react";

export const CoinContext = createContext();

const CoinState = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <CoinContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinState;
