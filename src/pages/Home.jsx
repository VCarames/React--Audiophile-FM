import Hero from "../components/intros/Hero";
import CategoryLinkSection from "../components/categoryLinks/CategoryLinkSection";
import ProductFeaturedSection from "../productFeatured/ProductFeaturedSection";

function Home() {
  return (
    <>
      <Hero />
      <CategoryLinkSection categoryLinkClass="category--home" />
      <ProductFeaturedSection />
    </>
  );
}

export default Home;
