import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "/public/data/Products.json";

import ProductCategoryList from "./ProductCategoryList";

const ProductCategorySection = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = productsData.filter(
      (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    );
    setProducts(filteredProducts);
  }, [categoryName]);

  return (
    <>
      <section className="category-intro">
        <div className="category-intro__header">
          <h1 className="category-intro__title">{categoryName}</h1>
        </div>
      </section>
      <ProductCategoryList products={products} />
    </>
  );
};

export default ProductCategorySection;
