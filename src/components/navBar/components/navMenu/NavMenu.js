// styles
/* import Card from "../../../card/Card"; */

// components
import "./NavMenu.styles.scss";

function NavMenu({ content }) {
  const { links, /* cards */ } = content;

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
        {/* {cards?.[0] ? <Card data={cards[0]} variant="opinionArticle" /> : <></>}
        <div>
          {cards?.[1] ? (
            <Card data={cards[1]} variant="opinionArticle" />
          ) : (
            <></>
          )}
          {cards?.[2] ? (
            <Card data={cards[2]} variant="opinionArticle" />
          ) : (
            <></>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default NavMenu;
