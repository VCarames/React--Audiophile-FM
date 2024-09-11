import ProductFeaturedList from "./ProductFeaturedList";

function ProductFeaturedSection() {
  return (
    <section className="product-featured">
      <h2 className="visually-hidden">Featured Products</h2>
      <div className="product-featured__content">
        <ProductFeaturedList />
      </div>
    </section>
  );
}

export default ProductFeaturedSection;
