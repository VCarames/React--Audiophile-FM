import { Link } from "react-router-dom";
import Arrow from "/assets/shared/desktop/icon-arrow-right.svg";

function NavLinks({ imgClass, img, to, category }) {
  return (
    <li className="nav__menu-item" role="listitem">
      <Link className="nav__menu-link" to={to}>
        <img className={`nav__menu-img ${imgClass}`} src={img} alt="" />
        <div className="nav__menu-group">
          <span className="nav__menu-category">{category}</span>
          <div className="nav__menu-group--shop">
            <span className="nav__menu-text">Shop</span>
            <img src={Arrow} alt="" />
          </div>
        </div>
      </Link>
    </li>
  );
}

export default NavLinks;
