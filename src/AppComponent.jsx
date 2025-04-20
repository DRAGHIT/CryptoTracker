import { Routes, Route } from "react-router-dom";
import CoinState from "./components/CoinState";
import NavBarThing from "./components/NavBarThing";
import MainPage from "./components/MainPage";
import CoinInfoPage from "./components/CoinInfoPage";
import NewsPage from "./components/NewsPage";
import AboutStuff from "./components/AboutStuff";

function AppComponent() {
  return (
    <CoinState>
      <NavBarThing />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coin_info" element={<CoinInfoPage />} />
        <Route path="/news_page" element={<NewsPage />} />
        <Route path="/about_stuff" element={<AboutStuff />} />
      </Routes>
    </CoinState>
  );
}

export default AppComponent;
