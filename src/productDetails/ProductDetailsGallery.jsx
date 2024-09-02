const ProductDetailsGallery = ({ gallery }) => {
  return (
    <div className="product-details__gallery">
      <h2 className="product-details__gallery-title">Gallery</h2>
      {gallery.map((image, index) => (
        <picture className="product-details__gallery-picture" key={index}>
          <source media="(min-width: 62.5rem)" srcSet={image.large} />
          <source media="(min-width: 47.5rem)" srcSet={image.medium} />
          <img
            src={image.small}
            alt={image.alt}
            className="product-details__gallery-picture--img"
          />
        </picture>
      ))}
    </div>
  );
};

export default ProductDetailsGallery;
