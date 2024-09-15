import Hero from "../components/intros/Hero";
import CategoryLinkSection from "../components/categoryLinks/CategoryLinkSection";
import ProductFeaturedSection from "../productFeatured/ProductFeaturedSection";
import AboutSection from "../components/about/AboutSection";

function Home() {
  return (
    <>
      <Hero />
      <CategoryLinkSection categoryLinkClass="category--home" />
      <ProductFeaturedSection />
      <AboutSection aboutSectionClass="about--home" />
    </>
  );
}

export default Home;
