import AboutImages from "./AboutImages";
import AboutText from "./AboutText";

function AboutSection({ aboutSectionClass }) {
  return (
    <section className={`about ${aboutSectionClass}`}>
      <h2 className="visually-hidden">About Us</h2>
      <div className="about__content">
        <AboutImages />
        <AboutText />
      </div>
    </section>
  );
}

export default AboutSection;
