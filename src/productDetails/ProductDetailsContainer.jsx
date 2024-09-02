import AddToCartButton from "../components/buttons/AddToCartButton";
import { formatCurrency } from "/src/utilities/formatCurrency.js";

const ProductDetailsContainer = ({ product }) => {
  const { ribbon, showRibbon, name, description, price, images } = product;

  return (
    <div className="product-details__container">
      <div className="product-details__info">
        {showRibbon && <div className="product-details__ribbon">{ribbon}</div>}
        <h1 className="product-details__name">{name}</h1>
        <p className="product-details__description">{description}</p>
        <p className="product-details__price">{formatCurrency(price)}</p>
        <AddToCartButton product={product} />
      </div>

      <picture className="product-details__picture">
        <source media="(min-width: 62.5rem)" srcSet={images.large} />
        <source media="(min-width: 47.5rem)" srcSet={images.medium} />
        <img
          src={images.small}
          alt={name}
          className="product-details__picture--img"
        />
      </picture>
    </div>
  );
};

export default ProductDetailsContainer;
