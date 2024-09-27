import { useEffect, useState } from "react";
import ConfirmationModalText from "./ConfirmationModalText";
import ConfirmationModalList from "./ConfirmationModalList";
import ConfirmationModalTotal from "./ConfirmationModalTotal";

function ConfirmationModal({ isOpen, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("confirmation-modal")) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const modal = document.querySelector(".confirmation-modal__content");
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    const handleFocusTrap = (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleFocusTrap);
    firstFocusableElement.focus();

    return () => {
      document.removeEventListener("keydown", handleFocusTrap);
    };
  }, [isOpen]);

  const [showAllItems, setShowAllItems] = useState(false);

  if (!isOpen) return null;

  const handleToggleItems = () => {
    setShowAllItems(!showAllItems);
  };

  return (
    <div
      className="confirmation-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-modal__title"
      onClick={handleOverlayClick}
    >
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
