import FooterCopyright from "./FooterCopyright";
import FooterDetails from "./FooterDetails";
import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";
import FooterSocialLinks from "./FooterSocialLinks";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__intro">
          <FooterLogo />
          <FooterNav />
        </div>
        <FooterDetails />
        <FooterCopyright />
        <FooterSocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
