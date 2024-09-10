import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <nav aria-label="secondary">
      <ul className="footer-nav" role="list">
        <li className="footer-nav__list-item" role="listitem">
          <Link className="footer-nav__link">Home</Link>
        </li>
        <li className="footer-nav__list-item" role="listitem">
          <Link className="footer-nav__link">Headphones</Link>
        </li>
        <li className="footer-nav__list-item" role="listitem">
          <Link className="footer-nav__link">Speakers</Link>
        </li>
        <li className="footer-nav__list-item" role="listitem">
          <Link className="footer-nav__link">Earphones</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
