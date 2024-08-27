import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Logo from "/assets/shared/desktop/logo.svg";
import CartButton from "../cart/CartButton";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__links">
          <Navbar />
          <Link className="header__logo" alt="Audiophile - Home">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
