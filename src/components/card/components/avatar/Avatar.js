// styles
import "./Avatar.styles.scss";

function Avatar({ image, name }) {
  return (
    <div className="avatar">
      <img src={image} alt="author avatar" />
      <p>{name}</p>
    </div>
  );
}

export default Avatar;
