import { useSelector } from "react-redux";
import { getCart } from "../components/cart/CartSlice";
import ConfirmationModalItem from "./ConfirmationModalItem";

function ConfirmationModalList({ showAllItems }) {
  const cart = useSelector(getCart);

  return (
    <ul className="confirmation-modal__list" role="list">
      {cart.slice(0, showAllItems ? cart.length : 1).map((product) => (
        <ConfirmationModalItem key={product.productId} product={product} />
      ))}
    </ul>
  );
}

export default ConfirmationModalList;
