import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__info">
          <hgroup className="hero__header">
            <p className="hero__ribbon">New Product</p>
            <h2 className="hero__title">XX99 Mark II Headphones</h2>
          </hgroup>
          <div className="hero__description">
            <p className="hero__text">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link className="hero__button button button--one">See Product</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
