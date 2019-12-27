import React from "react";
import './Container.css';

function Container(props) {
  return (
      <div className="col">

      <div className="wrapper">{props.children}</div>;
      </div>
  )
}

export default Container;
