// data
import placeholder from "../../data/placeholder.json";

// styles
import "./Carousel.styles.scss";

// components
import Card from "../card/Card";

function Carousel() {
  const title = placeholder.carousel.title;
  const cards = placeholder.carousel.cards;

  if (!cards.length) {
    return null;
  }

  return (
    <section className="carousel__wrapper">
      <h2>{title}</h2>
      <div className="carousel">
        <Card data={cards[0]} />
      </div>
    </section>
  );
}

export default Carousel;
