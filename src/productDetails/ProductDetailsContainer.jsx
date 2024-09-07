import { useSelector } from "react-redux";
import AddToCartButton from "../components/buttons/AddToCartButton";
import UpdateItemQuantity from "../components/buttons/UpdateItemQuantity";
import { formatCurrency } from "/src/utilities/formatCurrency.js";
import { getCurrentQuantityById } from "../components/cart/CartSlice";

const ProductDetailsContainer = ({ product }) => {
  const { id, ribbon, showRibbon, name, description, price, productImages } =
    product;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <div className="product-details__container">
      <picture className="product-details__picture">
        <source media="(min-width: 62.5rem)" srcSet={productImages.desktop} />
        <source media="(min-width: 47.5rem)" srcSet={productImages.tablet} />
        <img
          src={productImages.mobile}
          alt={name}
          className="product-details__picture--img"
        />
      </picture>
      <div className="product-details__info">
        {showRibbon && <p className="product-details__ribbon">{ribbon}</p>}
        <h1 className="product-details__name">{name}</h1>
        <p className="product-details__description">{description}</p>
        <p className="product-details__price">{formatCurrency(price)}</p>
        <div className="product-details__controls">
          <UpdateItemQuantity
            productId={id}
            currentQuantity={currentQuantity}
          />
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
