import ProductRecommendationList from "./ProductRecommendationList";

function ProductRecommendationSection() {
  return (
    <section className="product-recommendation">
      <div className="product-recommendation__content">
        <h2 className="product-recommendation__title">You May Also Like</h2>
        <ProductRecommendationList />
      </div>
    </section>
  );
}

export default ProductRecommendationSection;
