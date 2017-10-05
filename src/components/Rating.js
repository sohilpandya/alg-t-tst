import React from "react";

import emptyStar from "../graphics/star-empty.png";
import filledStar from "../graphics/stars-plain.png";

const Rating = ({ star }) => {
  return (
    <div className="pv1">
      <img
        src={`${star > 0 ? filledStar : emptyStar}`}
        className="h1p5 mw1p5 o-70"
      />
      <img
        src={`${star > 1 ? filledStar : emptyStar}`}
        className="h1p5 mw1p5 o-70"
      />
      <img
        src={`${star > 2 ? filledStar : emptyStar}`}
        className="h1p5 mw1p5 o-70"
      />
      <img
        src={`${star > 3 ? filledStar : emptyStar}`}
        className="h1p5 mw1p5 o-70"
      />
      <img
        src={`${star > 4 ? filledStar : emptyStar}`}
        className="h1p5 mw1p5 o-70"
      />
    </div>
  );
};

export default Rating;
