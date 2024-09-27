import { useSelector } from "react-redux";
import { getCart } from "../components/cart/CartSlice";
import CheckoutSummaryItem from "./CheckoutSummaryItem";
import CheckoutSummaryTotal from "./CheckoutSummaryTotal";

function CheckoutSummary() {
  const cart = useSelector(getCart);

  return (
    <>
      <h2 className="checkout-summary__title">Summary</h2>

      <div className="checkout-summary__content">
        <ul className="checkout-summary__list">
          {cart.map((product) => (
            <CheckoutSummaryItem key={product.productId} product={product} />
          ))}
        </ul>
      </div>
      <CheckoutSummaryTotal />
    </>
  );
}

export default CheckoutSummary;
