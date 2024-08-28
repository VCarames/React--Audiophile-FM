import CategoryLink from "./CategoryLink";

function CategorylinkList() {
  return (
    <ul className="category__list">
      <CategoryLink
        img="public/assets/shared/desktop/image-category-thumbnail-headphones.png"
        heading="Headphones"
        link="/category/headphones"
      />
      <CategoryLink
        img="public/assets/shared/desktop/image-category-thumbnail-speakers.png"
        heading="Speakers"
        link="/category/speakers"
      />
      <CategoryLink
        img="public/assets/shared/desktop/image-category-thumbnail-earphones.png"
        heading="Earphones"
        link="/category/earphones"
      />
    </ul>
  );
}

export default CategorylinkList;
