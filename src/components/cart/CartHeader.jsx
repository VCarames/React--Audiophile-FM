import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotalCartQuantity } from "./CartSlice";

function CartHeader() {
  const dispatch = useDispatch();
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div className="cart-header">
      <h2 className="cart-header__title">
        Cart
        <span
          className="cart-header__quantity"
          aria-label="Number of items in cart"
        >
          ({totalCartQuantity})
        </span>
      </h2>
      <button
        className="cart-header__clear-btn button"
        onClick={() => dispatch(clearCart())}
      >
        Remove All
      </button>
    </div>
  );
}

export default CartHeader;
