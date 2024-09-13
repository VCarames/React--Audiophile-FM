import { Link } from "react-router-dom";

function ProductRecommendationItem({ product }) {
  const { id, productImages, name } = product;
  return (
    <li className="product-recommendation-list__item" role="listitem">
      <picture className="product-recommendation-list__picture">
        <source media="(min-width: 62.5rem)" srcSet={productImages.desktop} />
        <source media="(min-width: 47.5rem)" srcSet={productImages.tablet} />
        <img
          className="product-recommendation-list__image"
          src={productImages.mobile}
          alt={name}
        />
      </picture>
      <div className="product-recommendation-list__details">
        <h3 className="product-recommendation-list__title">{name}</h3>
        <Link className="button button--one" to={`/product/${id}`}>
          See Product
        </Link>
      </div>
    </li>
  );
}

export default ProductRecommendationItem;
