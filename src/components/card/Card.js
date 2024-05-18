// styles
import "./Card.styles.scss";

// components
import Avatar from "./components/avatar/Avatar";
import Label from "./components/label/Label";

function Card({ variant, data }) {
  const {
    image,
    start,
    subject,
    text,
    avatar: { image: avatarImg, name },
    button,
    location,
  } = data;

  return (
    <div className="card">
      {image || start ? <div className="card__marker">{image || start}</div> : <></>}
      <div className="card__content">
        {subject ? <h5>{subject.toUppercase()}</h5> : <></>}
        {text ? <h4>{text}</h4> : <></>}
        {avatarImg && name ? <Avatar /> : <></>}
        {button || location || start ? <Label /> : <></>}
      </div>
    </div>
  );
}

export default Card;
