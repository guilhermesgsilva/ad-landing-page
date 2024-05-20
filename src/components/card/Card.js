// libraries
import { useMemo } from "react";

// data
import placeholder from "../../data/placeholder.json";

// styles
import "./Card.styles.scss";

// components
import Avatar from "./components/avatar/Avatar";
import Label from "./components/label/Label";
import Marker from "./components/marker/Marker";

function Card({ variant, data }) {
  const { image, start, subject, text, avatar, button, location } = data;

  const { buttons } = placeholder;

  const buttonText = useMemo(() => {
    if (variant === "opinionArticle") {
      return buttons["opinionArticle"];
    } else if (button) {
      return buttons[button];
    } else {
      return;
    }
  }, [button, buttons, variant]);

  return (
    <div className={`card-${variant}`}>
      {image || start ? (
        <Marker content={image || start} variant={image ? "image" : "date"} />
      ) : (
        <div className="no__marker"/>
      )}
      <div className="card__content">
        <div className="card__content__top">
          {subject ? <h5>{subject.toUpperCase()}</h5> : <></>}
          {text ? <h4>{text}</h4> : <></>}
          {avatar?.image && avatar?.name ? (
            <Avatar image={avatar.image} name={avatar.name} />
          ) : (
            <></>
          )}
        </div>
        {buttonText || location || start ? (
          <Label button={buttonText} location={location} start={start} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Card;
