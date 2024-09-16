import CheckoutInput from "./CheckoutInput";

function CheckoutShippingInfo() {
  return (
    <div className="checkout-shipping">
      <h2 className="checkout__section-title">Shipping Info</h2>
      <form className="checkout__form-group checkout__form-group--shipping">
        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--address"
          label="Your Address"
          htmlFor="shipping-address"
          idNameInput="shipping-address"
          type="text"
          name="shippingAddress"
          placeholder="1137 Williams Avenue"
        />

        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--city"
          label="City"
          htmlFor="shipping-city"
          idNameInput="shipping-city"
          type="text"
          inputMode="text"
          name="shippingCity"
          placeholder="New York"
        />

        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--zip"
          label="ZIP Code"
          htmlFor="shipping-zip"
          idNameInput="shipping-zip"
          type="text"
          inputMode="text"
          name="shippingZip"
          placeholder="10001"
        />

        <CheckoutInput
          checkoutInputGroupClass="checkout-input__group--country"
          label="Country"
          idNameInput="shipping-country"
          htmlFor="shipping-country"
          type="text"
          inputMode="text"
          name="shippingCountry"
          placeholder="United States"
        />
      </form>
    </div>
  );
}

export default CheckoutShippingInfo;
