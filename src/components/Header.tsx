import { Link } from "react-router-dom";

import Search from "../components/Search";

import logo from "../img/tv_logo.png";

const Header = (props) => {
  return (
    <>
      <header className="center">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </header>
      <Search handleSearchQuery={props.handleSearchQuery} />
    </>
  );
};

export default Header;
