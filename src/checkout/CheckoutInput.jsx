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
}) {
  return (
    <div className={`checkout__input-group ${checkoutInputGroupClass}`}>
      <label className="checkout__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="checkout__input"
        id={idNameInput}
        aria-describedby={errorId}
        type={type}
        inputMode={inputMode}
        name={name}
        placeholder={placeholder}
        required
      ></input>
      <div id="checkout__error" aria-live="assertive">
        <span
          className="checkout__error-text"
          id={`checkout__error-text ${errorId}`}
        ></span>
      </div>
    </div>
  );
}

export default CheckoutInput;
