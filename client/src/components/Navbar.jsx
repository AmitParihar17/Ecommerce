import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { navigate,cartItems } = useShopContext();

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="w-full flex items-center justify-between px-6 md:px-10 py-4 relative bg-white z-50">
        {/* LEFT LINKS (Desktop) */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-pink-400" : "hover:text-pink-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive ? "text-pink-400" : "hover:text-pink-400"
            }
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-pink-400" : "hover:text-pink-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-pink-400" : "hover:text-pink-400"
            }
          >
            Contact
          </NavLink>
        </ul>

        {/* LOGO */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img src={assets.logo} className="w-32 cursor-pointer" alt="logo" />
        </Link>

        {/* RIGHT ICONS (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          {/* PROFILE */}
          <div className="relative group">
            <img
              onClick={() => navigate("/signup")}
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="profile"
            />

            <ul
              className="
    absolute right-0 top-full mt-1 z-50
    w-32 bg-gray-100 rounded-md py-2 shadow-md
    opacity-0
    pointer-events-none
    group-hover:opacity-100
    group-hover:pointer-events-auto
    transition border
  "
            >
              <li
                onClick={() => navigate("/my-profile")}
                className="px-4 py-1 hover:bg-gray-200 cursor-pointer"
              >
                My Profile
              </li>
              <li
                onClick={() => navigate("/orders")}
                className="px-4 py-1 hover:bg-gray-200 cursor-pointer"
              >
                Orders
              </li>
              <li className="px-4 py-1 hover:bg-gray-200 text-red-500 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>

          {/* SEARCH */}
          <img
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="search"
          />

          {/* CART */}
          <div className="relative">
            <img
              onClick={() => navigate("/cart")}
              src={assets.cart_icon}
              className="w-5 cursor-pointer"
              alt="cart"
            />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          </div>
        </div>

        {/* MENU ICON (Mobile) */}
        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer md:hidden"
          alt="menu"
        />
      </nav>

      {/*  MOBILE DRAWER MENU  */}

      {showMenu && (
        <div className="fixed inset-0 bg-white z-50 p-6 md:hidden flex flex-col">
          {/* CLOSE ICON */}
          <img
            src={assets.cross_icon}
            onClick={() => setShowMenu(false)}
            className="w-6 mb-6 cursor-pointer"
            alt="close"
          />

          {/* NAV LINKS */}
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/collection">
              Collection
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              About
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              Contact
            </NavLink>
          </ul>

          {/* SPACER */}
          <div className="grow" />

          {/* LOGOUT */}
          <button
            onClick={() => {
              console.log("Logout");
              // future logic:
              // localStorage.removeItem("token");
              // navigate("/login");
              setShowMenu(false);
            }}
            className="flex items-center gap-3 text-red-600 font-medium border-t pt-4"
          >
            <img src={assets.profile_icon} className="w-5" alt="logout" />
            Logout
          </button>
        </div>
      )}

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2 md:hidden z-40">
        {/* HOME */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${isActive ? "text-pink-400" : "text-gray-600"}`
          }
        >
          <img src={assets.home_icon} className="w-5" alt="home" />
          Home
        </NavLink>

        {/* SEARCH */}
        <button className="flex flex-col items-center text-xs text-gray-600">
          <img src={assets.search_icon} className="w-5" alt="search" />
          Search
        </button>

        {/* CART */}
        <NavLink
          to="/cart"
          className="relative flex flex-col items-center text-xs text-gray-600"
        >
          <img src={assets.cart_icon} className="w-5" alt="cart" />
          Cart
          <span className="absolute -top-1 right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            {cartItems.length}
          </span>
        </NavLink>

        {/* PROFILE */}
        <button
          onClick={() => navigate("/signup")}
          className="flex flex-col items-center text-xs text-gray-600"
        >
          <img src={assets.profile_icon} className="w-5" alt="profile" />
          Profile
        </button>
      </div>
    </>
  );
};

export default Navbar;
