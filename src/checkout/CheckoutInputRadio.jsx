function CheckoutInputRadio({ id, labeltext, name, value }) {
  return (
    <div className="checkout-input-radio">
      <input
        className="checkout-input-radio__input"
        type="radio"
        id={id}
        name={name}
        value={value}
      />
      <label className="checkout-input-radio__label" htmlFor={id}>
        {labeltext}
      </label>
    </div>
  );
}

export default CheckoutInputRadio;
