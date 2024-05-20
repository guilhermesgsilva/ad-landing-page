// styles
import "./Marker.styles.scss";

// utils
import { formatDate } from "../../../../utils/formatDate";

function Marker({ content, variant, isLarge }) {
  return (
    <div className={`marker${isLarge ? "-large" : ""}`}>
      {variant === "image" ? (
        <img src={content} alt={content} draggable="false" />
      ) : (
        <></>
      )}
      {variant === "date" ? (
        <div className="marker__date">
          <p className="marker__date__day">{formatDate(content, "d")}</p>
          <p className="marker__date__month">
            {formatDate(content, "MMM").toUpperCase()}
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Marker;
