import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <nav aria-label="secondary">
      <ul className="footer-nav" role="list">
        <li className="footer-nav__list-item" role="listitem">
          <Link className="footer-nav__link" to="/">
            Home
          </Link>
        </li>
        <li className="footer-nav__list-item" role="listitem">
          <Link className="footer-nav__link" to="/category/headphones">
            Headphones
          </Link>
        </li>
        <li className="footer-nav__list-item" role="listitem">
          <Link className="footer-nav__link" to="/category/speakers">
            Speakers
          </Link>
        </li>
        <li className="footer-nav__list-item" role="listitem">
          <Link className="footer-nav__link" to="/category/earphones">
            Earphones
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
