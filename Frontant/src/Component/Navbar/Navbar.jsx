import { Link, useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import "./Navbar.css";
import logo from "../Assets/logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img className="myntra_home" src={logo} alt="Myntra Home" />
          </Link>
          <p>Shoppy</p>
        </div>

        <nav className="nav_bar">
          <Link to="/">Shop</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
        </nav>

        <div className="box">
          <div className="action_container" onClick={() => navigate("/cart")}>
            <FaShoppingBag />
            <sup>{0}</sup>
          </div>

          <div className="action_bar">
            <div
              className="action_container"
              onClick={() => navigate("/profile")}
            >
              <IoMdPerson />
              <span className="action_name">Profile</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
