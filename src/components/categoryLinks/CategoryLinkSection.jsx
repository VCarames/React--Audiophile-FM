import CategorylinkList from "./CategoryLinkList";

function CategoryLinkSection({ categoryLinkClass }) {
  return (
    <section className={`category ${categoryLinkClass}`}>
      <h2 className="visually-hidden">Product Categories</h2>
      <div className="category__content">
        <CategorylinkList />
      </div>
    </section>
  );
}

export default CategoryLinkSection;
