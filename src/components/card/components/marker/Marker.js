// styles
import "./Marker.styles.scss";

// utils
import { formatDate } from "../../../../utils/formatDate";

function Marker({ content, variant }) {
  return (
    <div className="marker">
      {variant === "image" ? <img src={content} alt={content} draggable="false" /> : <></>}
      {variant === "date" ? <p>{formatDate(content, "d MMM")}</p> : <></>}
    </div>
  );
}

export default Marker;
