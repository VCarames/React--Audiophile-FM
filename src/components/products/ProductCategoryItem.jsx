import { Link } from "react-router-dom";

const ProductCategoryItem = ({ product }) => {
  const { id, showRibbon, ribbon, name, description, images } = product;

  return (
    <li className="product-category-item">
      <picture className="product-category-item__picture">
        <source media="(min-width: 62.5rem)" srcSet={images.large} />
        <source media="(min-width: 47.5rem)" srcSet={images.medium} />
        <img
          className="product-category-item__picture--img"
          src={images.small}
          alt={name}
        />
      </picture>
      <div className="product-category-item__details">
        {showRibbon && (
          <div className="product-category-item__ribbon">{ribbon}</div>
        )}
        <h2 className="product-category-item__title">{name}</h2>
        <p className="product-category-item__description">{description}</p>
        <Link
          to={`/product/${id}`}
          className="product-category-item__link button"
        >
          See Product
        </Link>
      </div>
    </li>
  );
};

export default ProductCategoryItem;
