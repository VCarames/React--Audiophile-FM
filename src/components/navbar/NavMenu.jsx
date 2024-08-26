import NavLinks from "./NavLinks";

const NavMenu = ({ isNavExpanded, navMenuRef, handleFocusOut }) => {
  return (
    <ul
      className={`nav__menu ${isNavExpanded ? "expanded" : ""}`}
      id="nav__menu"
      ref={navMenuRef}
      onBlur={handleFocusOut}
      role="list"
    >
      <NavLinks to="" category="Home" />
      <NavLinks
        imgClass="nav__menu-img nav__menu-img--one"
        img="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        to="/category"
        category="Headphones"
      />
      <NavLinks
        imgClass="nav__menu-img nav__menu-img--two"
        img="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        to="/category"
        category="Speakers"
      />
      <NavLinks
        imgClass="nav__menu-img nav__menu-img--three"
        img="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        to="/category"
        category="Earphones"
      />
    </ul>
  );
};

export default NavMenu;
