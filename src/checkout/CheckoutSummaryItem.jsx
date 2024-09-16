import { formatCurrency } from "../utilities/formatCurrency";

function CheckoutSummaryItem({ product }) {
  const { thumbnail, name, totalPrice, quantity } = product;

  return (
    <li className="checkout-summary-item">
      <div className="checkout-summary-item__content">
        <img
          className="checkout-summary-item__image"
          src={thumbnail}
          alt={name}
        />
        <div className="checkout-summary-item__details">
          <p className="checkout-summary-item__name">{name}</p>
          <p className="checkout-summary-item__price">
            {formatCurrency(totalPrice)}
          </p>
        </div>
      </div>
      <p className="checkout-summary-item__quantity">&times; {quantity}</p>
    </li>
  );
}

export default CheckoutSummaryItem;
