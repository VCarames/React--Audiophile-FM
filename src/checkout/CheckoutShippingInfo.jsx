import CheckoutInput from "./CheckoutInput";

function CheckoutShippingInfo({ formValues, errors, handleInputChange }) {
  return (
    <div className="checkout-shipping">
      <h2 className="checkout__section-title">Shipping Info</h2>
      <div className="checkout__form-group checkout__form-group--shipping">
        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--address"
          label="Your Address"
          htmlFor="shipping-address"
          idNameInput="shipping-address"
          type="text"
          name="address"
          placeholder="1137 Williams Avenue"
          errorMessage={errors.address}
          value={formValues.address}
          onChange={handleInputChange}
        />

        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--city"
          label="City"
          htmlFor="shipping-city"
          idNameInput="shipping-city"
          type="text"
          inputMode="text"
          name="city"
          placeholder="New York"
          errorMessage={errors.city}
          value={formValues.city}
          onChange={handleInputChange}
        />

        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--zip"
          label="ZIP Code"
          htmlFor="shipping-zip"
          idNameInput="shipping-zip"
          type="text"
          inputMode="text"
          name="zip"
          placeholder="10001"
          errorMessage={errors.zip}
          value={formValues.zip}
          onChange={handleInputChange}
        />

        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--country"
          label="Country"
          idNameInput="shipping-country"
          htmlFor="shipping-country"
          type="text"
          inputMode="text"
          name="country"
          placeholder="United States"
          errorMessage={errors.country}
          value={formValues.country}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default CheckoutShippingInfo;
