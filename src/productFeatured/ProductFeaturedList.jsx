import ProductFeaturedItem from "./ProductFeaturedItem";

function ProductFeaturedList() {
  return (
    <ul className="product-featured-list" role="list">
      <ProductFeaturedItem
        featuredItemClass="product-featured-item--one"
        featuredPictureClass="product-featured-item__picture--one"
        featuredContentClass="product-featured-item__content--one"
        featuredHeadingClass="product-featured-item__title--one"
        featuredLinkClass="button--two"
        featuredImgDesktop="/assets/home/desktop/image-speaker-zx9.png"
        featuredImgTablet="/assets/home/tablet/image-speaker-zx9.png"
        featuredImg="/assets/home/mobile/image-speaker-zx9.png"
        featuredName="ZX9
Speaker"
        featuredDescription="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        featuredLink="/product/4"
      />

      <ProductFeaturedItem
        featuredItemClass="product-featured-item--two"
        featuredContentClass="product-featured-item__content--two"
        featuredHeadingClass="product-featured-item__title--two"
        featuredLinkClass="product-featured-item__link--two button--three"
        featuredImgDesktop="/assets/home/desktop/image-speaker-zx7.jpg"
        featuredImgTablet="/assets/home/tablet/image-speaker-zx7.jpg"
        featuredImg="/assets/home/mobile/image-speaker-zx7.jpg"
        featuredName="ZX7 Speaker"
        featuredDescription=""
        featuredLink="/product/5"
      />

      <ProductFeaturedItem
        featuredItemClass="product-featured-item--three"
        featuredPictureClass="product-featured-item__picture--three"
        featuredContentClass="product-featured-item__content--three"
        featuredHeadingClass="product-featured-item__title--three"
        featuredLinkClass="product-featured-item__link--three button--three"
        featuredImgDesktop="/assets/home/desktop/image-earphones-yx1.jpg"
        featuredImgTablet="/assets/home/tablet/image-earphones-yx1.jpg"
        featuredImg="/assets/home/mobile/image-earphones-yx1.jpg"
        featuredName="YX1 Earphones"
        featuredDescription=""
        featuredLink="/product/6"
      />
    </ul>
  );
}

export default ProductFeaturedList;
