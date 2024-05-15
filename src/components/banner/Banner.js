import { useSpringCarousel } from "react-spring-carousel";
import { HiArrowLongRight } from "react-icons/hi2";
/* import { IoLocationOutline } from "react-icons/io5"; */
/* import { LuClock4 } from "react-icons/lu"; */

import placeholder from "../../data/placeholder.json";

import "./Banner.styles.scss";

function Banner() {
  const slides = placeholder.banner.slides;
  const buttons = placeholder.buttons;

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
            <img src={item.image} alt={item.title} />
          </div>
        ),
      };
    }),
  });

  return <section className="banner">{carouselFragment}</section>;
}

export default Banner;
