import Hero from "../components/intros/Hero";
import CategoryLinkSection from "../components/categoryLinks/CategoryLinkSection";

function Home() {
  return (
    <>
      <Hero />
      <CategoryLinkSection categoryLinkClass="category--home" />
    </>
  );
}

export default Home;
