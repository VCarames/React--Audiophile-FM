import imgMobile from "/assets/shared/mobile/image-best-gear.jpg";
import imgTablet from "/assets/shared/mobile/image-best-gear.jpg";
import imgDesktop from "/assets/shared/mobile/image-best-gear.jpg";

function AboutImages() {
  return (
    <picture className="about-picture">
      <source media="(min-width: 62.5rem)" srcSet={imgDesktop} />
      <source media="(min-width: 47.5rem)" srcSet={imgTablet} />
      <img className="about__picture-img" src={imgMobile} alt="" />
    </picture>
  );
}

export default AboutImages;
