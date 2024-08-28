import { Link } from "react-router-dom";

function CategoryLink({ img, heading, link }) {
  return (
    <li className="category-link">
      <img className="category-link__image" src={img} alt="" />

      <Link className="category-link__link" to={link}>
        <h3 className="category-link__title">{heading}</h3>
        <div className="category-link__shop">
          <p className="category-link__shop-text">Shop</p>
          <img
            className="category-link__arrow-icon"
            src="public/assets/shared/desktop/icon-arrow-right.svg"
            alt=""
          />
        </div>
      </Link>
    </li>
  );
}

export default CategoryLink;
