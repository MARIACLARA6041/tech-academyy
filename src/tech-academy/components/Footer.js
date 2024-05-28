import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo-roxo.png";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="rodape">
        <p>© 2024 Tech Academy</p>

        <img
          width="auto"
          height="100%"
          src={logo}
          className="d-inline-block align-top"
          alt="logo"
        />
        <div>
          <Link to="/">
            <small>Home</small>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
