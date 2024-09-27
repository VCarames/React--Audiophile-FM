import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../components/cart/CartSlice";
import { formatCurrency } from "../utilities/formatCurrency";

function CheckoutSummaryTotal() {
  const shipping = 50;
  const productTotal = useSelector(getTotalCartPrice);
  const taxRate = 0.09;
  const taxAmount = productTotal * taxRate;
  const grandTotal = productTotal + shipping + taxAmount;

  return (
    <div className="checkout-summary-total">
      <div className="checkout-summary-total__group">
        <div className="checkout-summary-total__details">
          <p className="checkout-summary-total__label">Total</p>
          <p className="checkout-summary-total__amount">
            {formatCurrency(productTotal)}
          </p>
        </div>

        <div className="checkout-summary-total__details">
          <p className="checkout-summary-total__label">Shipping</p>
          <p className="checkout-summary-total__amount">
            {formatCurrency(shipping)}
          </p>
        </div>

        <div className="checkout-summary-total__details">
          <p className="checkout-summary-total__label">Tax (9%)</p>
          <p className="checkout-summary-total__amount">
            {formatCurrency(taxAmount)}
          </p>
        </div>
      </div>

      <div className="checkout-summary-total__details">
        <p className="checkout-summary-total__label">Grand Total</p>
        <p className="checkout-summary-total__amount">
          {formatCurrency(grandTotal)}
        </p>
      </div>
    </div>
  );
}

export default CheckoutSummaryTotal;
