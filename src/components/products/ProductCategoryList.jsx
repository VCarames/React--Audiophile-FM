import ProductCategoryItem from "./ProductCategoryItem";

const ProductCategoryList = ({ products }) => {
  return (
    <section className="product-category">
      <div className="product-category__content">
        <ul className="product-category__list">
          {products.map((product) => (
            <ProductCategoryItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductCategoryList;
