import { useParams } from "react-router-dom";
import productsData from "/public/data/Products.json";
import ProductDetailsContainer from "../productDetails/ProductDetailsContainer";
import ProductDetailsFeatures from "../productDetails/ProductDetailsFeatures";
import ProductDetailsBoxContents from "../productDetails/ProductDetailsBoxContents";
import ProductDetailsGallery from "../productDetails/ProductDetailsGallery";

const ProductDetailsSection = () => {
  const { productId } = useParams();
  const product = productsData.find((p) => String(p.id) === String(productId));

  if (!product) {
    return <h1 className="product-details__not-found">Product not found</h1>;
  }

  const { featuresOne, featuresTwo, boxContents, gallery } = product;

  return (
    <section className="product-details">
      <ProductDetailsContainer product={product} />
      <div className="product-details__additional-info">
        <ProductDetailsFeatures
          featuresOne={featuresOne}
          featuresTwo={featuresTwo}
        />
        <ProductDetailsBoxContents boxContents={boxContents} />
      </div>
      <ProductDetailsGallery gallery={gallery} />
    </section>
  );
};

export default ProductDetailsSection;
