import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinInfoPage from "./components/CoinInfoPage";
import NewsPage from "./components/NewsPage";
import AboutStuff from "./components/AboutStuff";
import NavBarThing from "./components/NavBarThing";
import MainPage from "./components/MainPage";

function AppComponent() {
  return (
    <Router>
      <NavBarThing />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coin-info/:coinId" element={<CoinInfoPage />} />
        <Route path="/news_page" element={<NewsPage />} />
        <Route path="/about_stuff" element={<AboutStuff />} />
        {/* Add a fallback route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default AppComponent;
