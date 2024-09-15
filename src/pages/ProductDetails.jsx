import ProductDetailsSection from "../productDetails/ProductDetailsSection";
import ProductRecommendationSection from "../productRecommendations/ProductRecommendationSection";
import CategoryLinkSection from "../components/categoryLinks/CategoryLinkSection";

function ProductDetails() {
  return (
    <>
      <ProductDetailsSection />
      <ProductRecommendationSection />
      <CategoryLinkSection />
    </>
  );
}

export default ProductDetails;
