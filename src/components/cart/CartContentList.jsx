import CartContentItem from "./CartContentItem";

function CartContentList({ cart }) {
  return cart.length === 0 ? (
    <div className="cart__empty-container">
      <p className="cart__empty-container--message">Your cart is empty.</p>
    </div>
  ) : (
    <div className="cart__list--content">
      <ul className="cart__list">
        {cart.map((item) => (
          <CartContentItem item={item} key={item.productId} />
        ))}
      </ul>
    </div>
  );
}

export default CartContentList;
