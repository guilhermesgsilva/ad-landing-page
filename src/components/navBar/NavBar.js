import placeholder from "../../data/placeholder.json";

import "./NavBar.styles.scss";

/* import NavMenu from "./navMenu/NavMenu"; */

function NavBar() {
  const links = placeholder.navigation.links;

  return (
    <header>
      <nav>
        <ul>
          {links.map((item) => {
            return (
              <>
                <li>
                  <a href="/">{item.title}</a>
                </li>
                {/* <NavMenu/> */}
              </>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
