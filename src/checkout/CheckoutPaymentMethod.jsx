import CheckoutInputRadio from "./CheckoutInputRadio";

function CheckoutPaymentMethod() {
  return (
    <div className="checkout-payment">
      <h2 className="checkout__section-title">Payment Details</h2>

      <p className="checkout-payment__text">
        Payments have been{" "}
        <span className="checkout-payment__text--highlght">disabled</span> from
        this component to allow users to bypass the payment process and view the
        confirmation modal once an order has been placed.
      </p>

      <fieldset className="checkout-payment__fieldset" disabled>
        <div className="checkout-payment__radios">
          <legend className="checkout-payment__legend">Payment Method</legend>

          <div className="checkout-payment__group">
            <CheckoutInputRadio
              id="card"
              labeltext="Debit/Credit Card"
              name="payment"
              value="card"
            />
            <CheckoutInputRadio
              id="paypal"
              labeltext="Paypal"
              name="payment"
              value="paypal"
            />

            <CheckoutInputRadio
              id="applepay"
              labeltext="ApplePay"
              name="payment"
              value="applePay"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default CheckoutPaymentMethod;
