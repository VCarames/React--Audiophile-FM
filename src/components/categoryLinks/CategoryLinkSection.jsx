import CategorylinkList from "./CategoryLinkList";

function CategoryLinkSection() {
  return (
    <section className="category">
      <h2 className="visually-hidden">Product Categories</h2>
      <div className="category__content">
        <CategorylinkList />
      </div>
    </section>
  );
}

export default CategoryLinkSection;
