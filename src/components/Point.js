import React from "react";

function Point({point}) {
  return (
    <div className="point">
        <div>X: {point[0]} điểm</div>
        <div>O: {point[1]} điểm</div>
    </div>
  );
}

export default Point;
