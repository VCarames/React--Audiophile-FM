import { formatCurrency } from "/src/utilities/formatCurrency.js";

function CartSummary({ totalCartPrice, handleCheckout }) {
  return (
    <div className="cart-summary">
      <div className="cart-summary__total">
        <p className="cart-summary__total--label">Total</p>
        <span className="cart-summary__total--price">
          {formatCurrency(totalCartPrice)}
        </span>
      </div>

      <button className="cart-summary__button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default CartSummary;
