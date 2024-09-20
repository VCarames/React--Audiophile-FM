import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../components/cart/CartSlice";
import { formatCurrency } from "../utilities/formatCurrency";

function ConfirmationModalTotal() {
  const shipping = 50;
  const productTotal = useSelector(getTotalCartPrice);
  const taxRate = 0.09;
  const taxAmount = productTotal * taxRate;
  const grandTotal = productTotal + shipping + taxAmount;

  return (
    <div className="confirmation-modal__total">
      <div className="confirmation-modal__total-content">
        <p className="confirmation-modal__total-label">Grand Total</p>
        <p className="confirmation-modal__total-amount">
          {formatCurrency(grandTotal)}
        </p>
      </div>
    </div>
  );
}

export default ConfirmationModalTotal;
