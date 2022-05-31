import { NavLink } from "react-router-dom";
import house from "../assets/house.png";
import "./Header.css";

//fix later... "can't use navlink outside react component"
const Header = () => {
  return (
    <header>
      <h1>FeedBook</h1>
      <div className="navigation">
        <NavLink
          to="/feedback/private"
          activeClassName="nav-link"
          className="navigationButton"
        >
          <p>Feed Privado</p>
        </NavLink>
        <NavLink
          to="/login"
          activeClassName="nav-link"
          className="navigationButton"
        >
          <p>Login</p>
        </NavLink>
        <NavLink
          to="/logout"
          activeClassName="nav-link"
          className="navigationButton"
        >
          <p>Logout</p>
        </NavLink>
        <NavLink
          to="/feedback"
          activeClassName="nav-link"
          exact
          className="navigationButton"
        >
          <img src={house} alt="House" width="56" height="60" />
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
