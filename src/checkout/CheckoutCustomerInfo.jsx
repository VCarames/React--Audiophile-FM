import CheckoutInput from "./CheckoutInput";

function CheckoutCustomerInfo() {
  return (
    <div className="checkout-customer-info">
      <h2 className="checkout__section-title">Billing details</h2>
      <form className="checkout__form-group checkout__form-group--billing">
        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--name"
          label="Name"
          htmlFor="billing-name"
          idNameInput="billing-name"
          errorId="checkout__error-text--name"
          type="text"
          inputMode="text"
          name="billingName"
          placeholder="Alexei Ward"
        />

        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--email"
          label="Email Address"
          htmlFor="billing-email"
          idNameInput="billing-email"
          errorId="checkout__error-text--email"
          type="email"
          inputMode="email"
          name="billingEmail"
          placeholder="alexei@mail.com"
        />

        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--phone"
          label="Phone Number"
          htmlFor="billing-phone"
          idNameInput="billing-phone"
          errorId="checkout__error-text--phone"
          type="tel"
          inputMode="tel"
          name="billingPhone"
          placeholder="+1 202-555-0136"
        />
      </form>
    </div>
  );
}

export default CheckoutCustomerInfo;
