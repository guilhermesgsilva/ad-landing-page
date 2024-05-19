// styles
import "./Button.styles.scss";

function Button({ title }) {
  return (
    <button
      className="button"
      onClick={() => {
        console.log("Go to article");
      }}
    >
      {title}
    </button>
  );
}

export default Button;
