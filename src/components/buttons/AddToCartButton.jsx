import { useDispatch } from "react-redux";
import { addItem } from "../cart/CartSlice.js";

function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  const { id, name, price, thumbnail } = product;

  function handleAddToCart() {
    const newItem = {
      productId: id,
      name: name,
      thumbnail: thumbnail,
      quantity: 1,
      currentPrice: price,
      totalPrice: price * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <button className="product__add-to-cart button" onClick={handleAddToCart}>
      <span>Add to cart</span>
    </button>
  );
}

export default AddToCartButton;
