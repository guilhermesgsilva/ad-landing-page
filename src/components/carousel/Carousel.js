// libraries
import { useSpringCarousel } from "react-spring-carousel";

// data
import placeholder from "../../data/placeholder.json";

// styles
import "./Carousel.styles.scss";

// components
import Card from "../card/Card";

function Carousel() {
  const {
    carousel: { title, cards },
  } = placeholder;

  const { carouselFragment } = useSpringCarousel({
    itemsPerSlide: 3,
    items: cards.map((item) => ({
      id: item.id,
      renderItem: <Card key={item.id} data={item} variant="opinionArticle" />,
    })),
  });

  if (!cards.length) {
    return null;
  }

  return (
    <section className="carousel__wrapper">
      <h2>{title}</h2>
      <div className="carousel">{carouselFragment}</div>
    </section>
  );
}

export default Carousel;
