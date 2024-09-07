const ProductDetailsGallery = ({ gallery }) => {
  const { mobile, tablet, desktop } = gallery;

  return (
    <div className="product-details__gallery">
      {mobile.map((image, index) => (
        <picture
          className={`product-details__gallery-picture product-details__gallery-picture--${
            index + 1
          }`}
          key={index}
        >
          <source media="(min-width: 62.5rem)" srcSet={desktop[index].image} />
          <source media="(min-width: 47.5rem)" srcSet={tablet[index].image} />
          <img
            src={mobile[index].image}
            alt={mobile[index].alt}
            className="product-details__gallery-picture--img"
          />
        </picture>
      ))}
    </div>
  );
};

export default ProductDetailsGallery;
