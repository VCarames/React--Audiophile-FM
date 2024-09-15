import CategoryLink from "./CategoryLink";
import HeadphonesImg from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerImg from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesImg from "/assets/shared/desktop/image-category-thumbnail-earphones.png";

function CategorylinkList() {
  return (
    <ul className="category__list">
      <CategoryLink
        CategoryImageClass="category-link__image--headphones"
        img={HeadphonesImg}
        heading="Headphones"
        link="/category/headphones"
      />
      <CategoryLink
        CategoryImageClass="category-link__image--speakers"
        img={SpeakerImg}
        heading="Speakers"
        link="/category/speakers"
      />
      <CategoryLink
        CategoryImageClass="category-link__image--earphones"
        img={EarphonesImg}
        heading="Earphones"
        link="/category/earphones"
      />
    </ul>
  );
}

export default CategorylinkList;
