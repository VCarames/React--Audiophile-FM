import { Link } from "react-router-dom";
import CheckoutCustomerInfo from "../checkout/CheckoutCustomerInfo";
import CheckoutShippingInfo from "../checkout/CheckoutShippingInfo";
import CheckoutSummary from "../checkout/CheckoutSummary";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__content">
        <Link to="/" className="checkout__back-link button">
          Go Back
        </Link>
        <div className="checkout__details">
          <div className="checkout__group">
            <h1 className="checkout__title">Checkout</h1>
            <div className="checkout__forms">
              <CheckoutCustomerInfo />
              <CheckoutShippingInfo />
            </div>
          </div>
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
