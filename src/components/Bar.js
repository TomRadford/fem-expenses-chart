import { useState } from "react";

const day = Date().substring(0, 3).toLowerCase();
const Bar = (props) => {
  const [style, setStyle] = useState({ height: `0` });

  setTimeout(() => {
    setStyle({height: `${props.value.amount / 16 * 2}rem`})
  }, 200);

  if (day === props.value.day) {
    style["backgroundColor"] = "var(--primary-two)";
  }
  return <div className="stats__bar" style={style}>
    {props.children}
  </div>;
};

export default Bar;
