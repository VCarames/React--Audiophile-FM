const NavButton = ({ isNavExpanded, toggleNav, navToggleRef }) => (
  <button
    className={`nav__button ${isNavExpanded ? "close" : "open"}`}
    aria-expanded={isNavExpanded}
    aria-controls="nav__menu"
    aria-label="menu"
    onClick={toggleNav}
    ref={navToggleRef}
  >
    <span className="nav__button-line" />
    <span className="nav__button-line" />
    <span className="nav__button-line" />
  </button>
);

export default NavButton;
