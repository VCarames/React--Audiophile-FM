import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "/src/components/cart/CartSlice.js";
import { formatCurrency } from "/src/utilities/formatCurrency.js";
import UpdateItemQuantity from "../buttons/UpdateItemQuantity";

function CartContentItem({ item }) {
  const { id, thumbnail, name, currentPrice, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="cart-content-item" role="listitem">
      <img
        className="cart-content-item__thumbnail"
        src={thumbnail}
        alt={name}
      />

      <div className="cart-content-item__info">
        <p className="cart-content-item__name">{name}</p>
        <p className="cart-content-item__price">
          {formatCurrency(currentPrice)}
        </p>
      </div>

      <UpdateItemQuantity
        qualityControlClass="quantity-control--cart"
        qualityControlButtonClass="quantity-control__button--cart"
        productId={id}
        currentQuantity={currentQuantity}
      />
    </li>
  );
}

export default CartContentItem;
