import { useState } from "react";
import ConfirmationModalText from "./ConfirmationModalText";
import ConfirmationModalList from "./ConfirmationModalList";
import ConfirmationModalTotal from "./ConfirmationModalTotal";

function ConfirmationModal({ isVisible, onClose }) {
  const [showAllItems, setShowAllItems] = useState(false);

  if (!isVisible) return null;

  const handleToggleItems = () => {
    setShowAllItems(!showAllItems);
  };

  return (
    <div className="confirmation-modal">
      <div className="confirmation-modal__content">
        <ConfirmationModalText />
        <div className="confirmation-modal__items-wrapper">
          <div className="confirmation-modal__items-container">
            <ConfirmationModalList showAllItems={showAllItems} />
            <button
              onClick={handleToggleItems}
              className="confirmation-modal__toggle-button button"
            >
              {showAllItems ? "Show Less" : "Show More"}
            </button>
          </div>

          <ConfirmationModalTotal />
        </div>

        <button
          onClick={onClose}
          className="confirmation-modal__button button button--one"
        >
          Back Home
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
