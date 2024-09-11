import { Link } from "react-router-dom";

function ProductFeaturedItem({
  featuredItemClass,
  featuredPictureClass,
  featuredContentClass,
  featuredHeadingClass,
  featuredLinkClass,
  featuredImgDesktop,
  featuredImgTablet,
  featuredImg,
  featuredName,
  featuredDescription,
  featuredLink,
}) {
  return (
    <li
      className={`product-featured-item ${featuredItemClass}`}
      role="listitem"
    >
      <picture
        className={`product-featured-item__picture ${featuredPictureClass}`}
      >
        <source srcSet={featuredImgDesktop} media="(min-width: 62.5rem)" />
        <source srcSet={featuredImgTablet} media="(min-width: 47.5rem)" />
        <img
          className="product-featured-item__picture--img"
          src={featuredImg}
          alt={featuredName}
        />
      </picture>
      <div className={`product-featured-item__content ${featuredContentClass}`}>
        <h3 className={`product-featured-item__title ${featuredHeadingClass}`}>
          {featuredName}
        </h3>

        {featuredDescription && (
          <p className="product-featured-item__description">
            {featuredDescription}
          </p>
        )}

        <Link
          className={`product-featured-item__link button ${featuredLinkClass}`}
          to={featuredLink}
        >
          See Product
        </Link>
      </div>
    </li>
  );
}

export default ProductFeaturedItem;
