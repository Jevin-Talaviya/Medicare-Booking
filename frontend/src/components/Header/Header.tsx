import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import userImg from "../../assets/images/avatar-icon.png";
import logo from "../../assets/images/logo.png"; // Correct path

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctor", display: "Find a Doctor" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ======== Logo ========= */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* ======== Menu ========= */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-semibold"
                        : "text-textColor text-[16px] leading-7 font-medium hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ======== nav right ========= */}
          <div className="flex items-center gap-4">
            <div>
              <Link to="/profile">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="User Profile" />
                </figure>
              </Link>
            </div>


          <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600 h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
          </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
