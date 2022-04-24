import house from "../assets/house.png";

const Header = () => {
  return (
    <header>
      <h1>FeedBook</h1>
      <a href="https://www.instagram.com/taylorswift/">
        <img src={house} alt="House" width="56" height="60"></img>
      </a>
    </header>
  );
};
export default Header;
