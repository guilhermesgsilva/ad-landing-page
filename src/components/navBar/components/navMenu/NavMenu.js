// data
import placeholder from "../../../../data/placeholder.json";

// styles
import Card from "../../../card/Card";

// components
import "./NavMenu.styles.scss";

function NavMenu({ content }) {
  const { links } = content;

  const {
    navigation: { cards },
  } = placeholder;

  return (
    <div className="nav__menu__wrapper">
      <div className="nav__menu">
        <ul className="nav__menu__list">
          {links?.map((item) => {
            return (
              <li key={item.id}>
                <a href="/">{item.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="nav__menu__cards">
          {cards?.[0] ? <Card data={cards[0]} variant="large" /> : <></>}
          <div className="nav__menu__small__cards">
            {cards?.[1] ? <Card data={cards[1]} variant="small" /> : <></>}
            {cards?.[2] ? <Card data={cards[2]} variant="small" /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
