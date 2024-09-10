function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-copyright">
      <p className="footer-copyright__text">
        Copyright {currentYear}. All Rights Reserved
      </p>
    </div>
  );
}

export default FooterCopyright;
