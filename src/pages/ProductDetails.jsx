import ProductDetailsSection from "../productDetails/ProductDetailsSection";
import ProductRecommendationSection from "../productRecommendations/ProductRecommendationSection";
import CategoryLinkSection from "../components/categoryLinks/CategoryLinkSection";
import AboutSection from "../components/about/AboutSection";

function ProductDetails() {
  return (
    <>
      <ProductDetailsSection />
      <ProductRecommendationSection />
      <CategoryLinkSection />
      <AboutSection />
    </>
  );
}

export default ProductDetails;
