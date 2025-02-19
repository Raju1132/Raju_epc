import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUserCircle,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "../Css/Header.css";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full !px-5 !py-2  flex justify-between items-center bg-[#c31c00] z-50 ">
      <div className="">
        <Link to="/" className="font-bold !text-white !text-2xl">
          BikeParts
        </Link>
      </div>
      <div className="hidden  md:flex justify-between items-center bg-white !p-3 rounded-2xl w-86   ">
        <input type="text"  className=" !border-0 outline-0  w-72" placeholder="Search for bike parts..." />
        <button className="bg-transparent cursor-pointer">
          <FaSearch  className="bg-transparent"/>
        </button>
      </div>
      <div className=" flex items-center gap-3 !text-2xl">
        <Link to="/cart" className="!text-white ">
          <FaShoppingCart />
        </Link>
        <span className="!text-white">John Doe</span>
        <Link to="/profile" className="!text-white">
          <FaUserCircle />
        </Link>
        <button className="menu-btn" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
        <nav className="mobile-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart
          </Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)}>
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
