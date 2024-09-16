import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCart, getTotalCartPrice } from "./CartSlice";

import CartButton from "./CartButton";
import CartSummary from "./CartSummary";
import CartHeader from "./CartHeader";
import CartContentList from "./CartContentList";

function Cart() {
  const [isCartExpanded, setIsCartExpanded] = useState(false);
  const cartContentRef = useRef();
  const cartToggleRef = useRef();
  const location = useLocation();

  const totalCartPrice = useSelector(getTotalCartPrice);

  const cart = useSelector(getCart);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        closeCart();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    closeCart();
  }, [location]);

  const toggleCart = () => {
    setIsCartExpanded((prevExpanded) => !prevExpanded);
    if (!isCartExpanded) {
      document.body.classList.add("disable-scroll--cart");
    } else {
      document.body.classList.remove("disable-scroll--cart");
    }
  };

  const closeCart = () => {
    setIsCartExpanded(false);
    document.body.classList.remove("disable-scroll--cart");
  };

  const handleFocusOut = (event) => {
    if (!cartContentRef.current.contains(event.relatedTarget)) {
      closeCart();
    }
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart" aria-label="main">
      <CartButton
        isCartExpanded={isCartExpanded}
        toggleCart={toggleCart}
        cartToggleRef={cartToggleRef}
      />
      <div
        className="cart__content"
        id="cart__content"
        ref={cartContentRef}
        onBlur={handleFocusOut}
      >
        <CartHeader />

        <CartContentList cart={cart} />

        <CartSummary
          totalCartPrice={totalCartPrice}
          handleCheckout={handleCheckout}
        />
      </div>
    </div>
  );
}

export default Cart;
