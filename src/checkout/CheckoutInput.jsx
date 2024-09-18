function CheckoutInput({
  label,
  checkoutInputGroupClass,
  idNameInput,
  errorId,
  htmlFor,
  type,
  inputMode,
  name,
  placeholder,
  errorMessage,
  value,
  onChange,
}) {
  return (
    <div className={`checkout-input__group ${checkoutInputGroupClass}`}>
      <div className="checkout-input__group--label">
        <label className="checkout__label" htmlFor={htmlFor}>
          {label}
        </label>
        <div id="checkout__error" aria-live="assertive">
          <span
            className="checkout__error-text"
            id={`checkout__error-text ${errorId}`}
          >
            {errorMessage}
          </span>
        </div>
      </div>
      <input
        className="checkout__input"
        id={idNameInput}
        aria-describedby={errorId}
        type={type}
        inputMode={inputMode}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      ></input>
    </div>
  );
}

export default CheckoutInput;
