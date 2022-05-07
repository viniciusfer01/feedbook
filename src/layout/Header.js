import { NavLink } from "react-router-dom";
import house from "../assets/house.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>FeedBook</h1>
      <div>
        <NavLink to="/feedback" activeClassName="nav-link" exact>
          <img src={house} alt="House" width="56" height="60"></img>
        </NavLink>
        <NavLink
          to="/feedback/private"
          activeClassName="nav-link"
          className="privateFeedButton"
        >
          <p>Feed Privado</p>
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
