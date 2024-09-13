import { useState, useEffect } from "react";
import productsData from "/public/data/Recommendations.json";
import ProductRecommendationItem from "./ProductRecommendationItem";

const ProductRecommendationList = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const getRandomProducts = () => {
      const shuffled = [...productsData].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    };

    setRandomProducts(getRandomProducts());
  }, []);

  return (
    <ul className="product-recommendation-list" role="list">
      {randomProducts.map((product) => (
        <ProductRecommendationItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductRecommendationList;
