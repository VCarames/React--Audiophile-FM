import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../components/cart/CartSlice";
import { formatCurrency } from "../utilities/formatCurrency";
import CheckoutSummaryItem from "./CheckoutSummaryItem";

function CheckoutSummary() {
  const cart = useSelector(getCart);
  const shipping = 50;
  const productTotal = useSelector(getTotalCartPrice);
  const taxRate = 0.09;
  const taxAmount = productTotal * taxRate;
  const grandTotal = productTotal + shipping + taxAmount;

  return (
    <div className="checkout-summary">
      <h2 className="checkout-summary__title">Summary</h2>

      <div className="checkout-summary__items">
        <ul className="checkout-summary__list">
          {cart.map((product) => (
            <CheckoutSummaryItem key={product.productId} product={product} />
          ))}
        </ul>
      </div>

      <div className="checkout-summary__totals">
        <div className="checkout-summary__totals-group">
          <div className="checkout-summary__detail">
            <p className="checkout-summary__label">Total</p>
            <p className="checkout-summary__amount">
              {formatCurrency(productTotal)}
            </p>
          </div>

          <div className="checkout-summary__detail">
            <p className="checkout-summary__label">Shipping</p>
            <p className="checkout-summary__amount">
              {formatCurrency(shipping)}
            </p>
          </div>

          <div className="checkout-summary__detail">
            <p className="checkout-summary__label">Tax (9%)</p>
            <p className="checkout-summary__amount">
              {formatCurrency(taxAmount)}
            </p>
          </div>
        </div>

        <div className="checkout-summary__detail">
          <p className="checkout-summary__label">Grand Total</p>
          <p className="checkout-summary__amount checkout-summary__amount--grand-total">
            {formatCurrency(grandTotal)}
          </p>
        </div>

        <button className="checkout-summary__button button button--one">
          Continue & Pay
        </button>
      </div>
    </div>
  );
}

export default CheckoutSummary;
