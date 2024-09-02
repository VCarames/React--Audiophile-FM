const ProductDetailsBoxContents = ({ boxContents }) => {
  return (
    <div className="product-details__box-contents">
      <h2 className="product-details__box-contents-title">In the Box</h2>
      <ul className="product-details__box-contents-list">
        {boxContents.map((content, index) => (
          <li className="product-details__box-contents-item" key={index}>
            <span className="product-details__box-contents-quantity">
              {content.quantity}
            </span>
            {content.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetailsBoxContents;
