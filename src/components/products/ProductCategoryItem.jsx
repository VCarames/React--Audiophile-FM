import { Link } from "react-router-dom";

const ProductCategoryItem = ({ product }) => {
  const { id, showRibbon, ribbon, name, description, previewImages } = product;

  return (
    <li className="product-category-item">
      <picture className="product-category-item__picture">
        <source srcSet={previewImages.desktop} media="(min-width: 62.5rem)" />
        <source srcSet={previewImages.tablet} media="(min-width: 47.5rem)" />
        <img
          src={previewImages.mobile}
          alt={`Preview of ${name}`}
          className="product-category-item__picture--img"
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
