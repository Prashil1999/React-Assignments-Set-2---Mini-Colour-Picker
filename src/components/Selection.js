import React from "react";

const Selection = (props) => {
  let [style, setStyle] = React.useState({ background: "" });
  let handleClick = () => {
    let callback = (nextBackground) => {
      setStyle(nextBackground);
    };
    props.applyColor(callback);
  };
  return (
    <>
      <div className="fix-box" style={style} onClick={handleClick}>
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
};
export default Selection;
