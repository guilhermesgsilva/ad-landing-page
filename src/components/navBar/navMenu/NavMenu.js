import "./NavMenu.styles.scss";

function NavMenu({ content }) {
  const menuLinks = content.links;

  return (
    <div className="nav__menu__wrapper">
      <div className="nav__menu">
        <ul className="nav__menu__list">
          {menuLinks?.map((item) => {
            return (
              <li key={item.id}>
                <a href="/">{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
