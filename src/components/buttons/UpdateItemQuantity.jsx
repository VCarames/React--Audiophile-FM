import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "/src/components/cart/CartSlice.js";

function UpdateItemQuantity({
  qualityControlClass,
  qualityControlButtonClass,
  productId,
  currentQuantity,
}) {
  const dispatch = useDispatch();

  return (
    <div className={`quantity-control  ${qualityControlClass}`}>
      <button
        className={`quantity-control__button quantity-control__button--decrease  ${qualityControlButtonClass}`}
        onClick={() => dispatch(decreaseItemQuantity(productId))}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="quantity-control__value">{currentQuantity}</span>
      <button
        className={`quantity-control__button quantity-control__button--increase  ${qualityControlButtonClass}`}
        onClick={() => dispatch(increaseItemQuantity(productId))}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
