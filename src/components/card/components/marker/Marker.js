// styles
import "./Marker.styles.scss";

// utils
import { formatDate } from "../../../../utils/formatDate";

function Marker({ content, variant }) {
  return (
    <div className="marker">
      {variant === "image" ? <img src={content} alt={content} /> : <></>}
      {variant === "date" ? <p>{formatDate(content)}</p> : <></>}
    </div>
  );
}

export default Marker;
