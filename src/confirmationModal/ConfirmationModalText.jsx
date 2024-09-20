function ConfirmationModalText() {
  return (
    <div className="confirmation-modal__text">
      <img
        className="confirmation-modal__icon"
        src="/assets/checkout/icon-order-confirmation.svg"
        alt="Order Confirmation"
      />
      <h2 className="confirmation-modal__title">Thank you for your order</h2>
      <p className="confirmation-modal__message">
        You will receive an email confirmation shortly.
      </p>
    </div>
  );
}

export default ConfirmationModalText;
