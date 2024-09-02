const ProductDetailsFeatures = ({ featuresOne, featuresTwo }) => {
  return (
    <div className="product-details__features">
      <h2 className="product-details__features-title">Features</h2>
      <p className="product-details__features-text">{featuresOne}</p>
      <p className="product-details__features-text">{featuresTwo}</p>
    </div>
  );
};

export default ProductDetailsFeatures;
