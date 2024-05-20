// libraries
import { IoLocationOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";

// styles
import "./Label.styles.scss";

// components
import Button from "../button/Button";

function Label({ button, location, dateValue, variant }) {
  return (
    <div className="label">
      {button ? <Button title={button} /> : <></>}
      {location ? (
        <div>
          <IoLocationOutline />
          <p>{location}</p>
        </div>
      ) : (
        <></>
      )}
      {dateValue ? (
        <div>
          {variant !== "opinionArticle" ? <LuClock4 /> : <></>}
          <p>{dateValue}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Label;
