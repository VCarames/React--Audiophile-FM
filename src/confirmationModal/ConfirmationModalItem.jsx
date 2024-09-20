import { formatCurrency } from "../utilities/formatCurrency";

function ConfirmationModalItem({ product }) {
  const { thumbnail, name, totalPrice, quantity } = product;
  return (
    <li className="confirmation-modal-item" role="listitem">
      <div className="confirmation-modal-item__content">
        <img
          className="confirmation-modal-item__image"
          src={thumbnail}
          alt={name}
        />
        <div className="confirmation-modal-item__details">
          <p className="confirmation-modal-item__name">{name}</p>
          <p className="confirmation-modal-item__price">
            {formatCurrency(totalPrice)}
          </p>
        </div>
      </div>
      <p className="confirmation-modal-item__quantity">&times;{quantity}</p>
    </li>
  );
}

export default ConfirmationModalItem;
