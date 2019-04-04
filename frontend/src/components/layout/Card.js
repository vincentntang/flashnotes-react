import React from "react";

const Card = props => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
      </h1>
      <h3 className="tagline">
        <span>
          {props.tagline}
          {props.age}
        </span>
      </h3>
    </header>
  );
};

export default Card;
