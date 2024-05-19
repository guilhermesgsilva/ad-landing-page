// libraries
/* import { IoLocationOutline } from "react-icons/io5"; */
/* import { LuClock4 } from "react-icons/lu"; */

// styles
import "./Label.styles.scss";

// components
import Button from "../button/Button";

// utils
import { formatDate } from "../../../../utils/formatDate";

function Label({ button, location, start }) {
  return (
    <div className="label">
      <Button title={button} />
      <p className="date">{formatDate(start, "d MMMM yyyy")}</p>
    </div>
  );
}

export default Label;
