import { useRef } from "react";
import "./style.scss";
import logolight from "./../../assets/logo/logo-light.png";
import { GoSearch } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const sideNav = useRef();
  const toggleNav = () => {
    sideNav.current.classList.toggle('active')
  };
  return (
    <nav>
      <div className="container">
        <img src={logolight} alt="" />
        <ul>
          <li>Contact</li>
          <li>Products</li>
          <li>Category</li>
          <li>About</li>
          <GoSearch id="searchIcon" />
          <MdOutlineShoppingBag />
        </ul>
        <GiHamburgerMenu onClick={toggleNav} id="burger" />

        <div ref={sideNav} className="sidenav">
          <span>Home</span>
          <span>Products</span>
          <span>Category</span>
          <span>Contact</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
