// libraries
import { useEffect, useState } from "react";

// data
import placeholder from "../../data/placeholder.json";

// styles
import "./NavBar.styles.scss";

// components
import NavMenu from "./components/navMenu/NavMenu";

function NavBar() {
  const [active, setActive] = useState(false);
  const [content, setContent] = useState({});

  const {
    navigation: { links },
  } = placeholder;

  return (
    <header
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <nav>
        <ul className="nav__list">
          {links?.map((item) => {
            return (
              <li
                className={
                  active && content.id === item.id ? "list__item--active" : ""
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
