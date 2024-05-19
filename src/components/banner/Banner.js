// libraries
import { useSpringCarousel } from "react-spring-carousel";
import { HiArrowLongRight } from "react-icons/hi2";

// data
import placeholder from "../../data/placeholder.json";

// styles
import "./Banner.styles.scss";

function Banner() {
  const {
    banner: { slides },
    buttons,
  } = placeholder;

  const { carouselFragment } = useSpringCarousel({
    withLoop: true,
    items: slides.map((item) => {
      return {
        id: item.title,
        renderItem: (
          <div key={item.id} className="banner__slide">
            <div>
              <h3>{item.subject.toUpperCase()}</h3>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <a href="/">
                {buttons.readMore.toUpperCase()}
                <HiArrowLongRight />
              </a>
            </div>

            <img src={item.image} alt={item.title} draggable="false" />
          </div>
        ),
      };
    }),
  });

  return <section className="banner">{carouselFragment}</section>;
}

export default Banner;
