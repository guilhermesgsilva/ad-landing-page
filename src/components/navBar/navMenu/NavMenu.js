import "./NavMenu.styles.scss";

function NavMenu({ content }) {
  return (
    <div className="nav__menu__wrapper">
      <div className="nav__menu">{content.id}</div>
    </div>
  );
}

export default NavMenu;
