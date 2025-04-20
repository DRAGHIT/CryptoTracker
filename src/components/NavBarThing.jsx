import { Link } from "react-router-dom";

function NavBarThing() {
  return (
    <nav className="nav">
      <ul className="nav_items">
        <li>
          <Link className="nav_link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav_link" to="/coin_info">
            Coin Info
          </Link>
        </li>
        <li>
          <Link className="nav_link" to="/news_page">
            News
          </Link>
        </li>
        <li>
          <Link className="nav_link" to="/about_stuff">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarThing;
