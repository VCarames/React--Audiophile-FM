import AboutImages from "./AboutImages";
import AboutText from "./AboutText";

function AboutSection() {
  return (
    <section className="about">
      <h2 className="visually-hidden">About Us</h2>
      <div className="about__content">
        <AboutImages />
        <AboutText />
      </div>
    </section>
  );
}

export default AboutSection;
