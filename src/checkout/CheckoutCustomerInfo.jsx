import CheckoutInput from "./CheckoutInput";

function CheckoutCustomerInfo({ formValues, errors, handleInputChange }) {
  return (
    <div className="checkout-customer-info">
      <h2 className="checkout__section-title">Billing details</h2>
      <div className="checkout__form-group checkout__form-group--billing">
        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--name"
          label="Name"
          htmlFor="billing-name"
          idNameInput="billing-name"
          errorId="checkout__error-text--name"
          type="text"
          inputMode="text"
          name="name"
          placeholder="Alexei Ward"
          errorMessage={errors.name}
          value={formValues.name}
          onChange={handleInputChange}
        />

        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--email"
          label="Email Address"
          htmlFor="billing-email"
          idNameInput="billing-email"
          errorId="checkout__error-text--email"
          type="email"
          inputMode="email"
          name="email"
          placeholder="alexei@mail.com"
          errorMessage={errors.email}
          value={formValues.email}
          onChange={handleInputChange}
        />

        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--phone"
          label="Phone Number"
          htmlFor="billing-phone"
          idNameInput="billing-phone"
          errorId="checkout__error-text--phone"
          type="tel"
          inputMode="tel"
          name="phone"
          placeholder="+1 202-555-0136"
          errorMessage={errors.phone}
          value={formValues.phone}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default CheckoutCustomerInfo;
