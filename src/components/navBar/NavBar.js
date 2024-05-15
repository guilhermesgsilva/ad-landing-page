import placeholder from "../../data/placeholder.json";

import "./NavBar.styles.scss";

/* import NavMenu from "./navMenu/NavMenu"; */

function NavBar() {
  const links = placeholder.navigation.links;

  return (
    <header>
      <nav>
        <ul className="nav__list">
          {links.map((item) => {
            return (
              <li key={item.id}>
                <a href="/">{item.title}</a>
                {/* <NavMenu/> */}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
