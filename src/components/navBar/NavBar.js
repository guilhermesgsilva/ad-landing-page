import { useState } from "react";

import placeholder from "../../data/placeholder.json";

import "./NavBar.styles.scss";

import NavMenu from "./navMenu/NavMenu";

function NavBar() {
  const [active, setActive] = useState(false);
  const [content, setContent] = useState({});

  const links = placeholder.navigation.links;

  return (
    <header
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <nav>
        <ul className="nav__list">
          {links.map((item) => {
            return (
              <li
                className={
                  active && content.id === item.id && "list__item--active"
                }
                key={item.id}
                onMouseEnter={() => setContent(item)}
              >
                <a href="/">{item.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {active && content ? (
        <NavMenu active={active} content={content} />
      ) : (
        <></>
      )}
    </header>
  );
}

export default NavBar;
