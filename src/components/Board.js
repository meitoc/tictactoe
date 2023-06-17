// import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square id="0" value={squares[0]} handleClick={handleClick} />
          <Square id="1" value={squares[1]} handleClick={handleClick} />
          <Square id="2" value={squares[2]} handleClick={handleClick} />
        </div>
        <div className="board-row">
          <Square id="3" value={squares[3]} handleClick={handleClick} />
          <Square id="4" value={squares[4]} handleClick={handleClick} />
          <Square id="5" value={squares[5]} handleClick={handleClick} />
        </div>
        <div className="board-row">
          <Square id="6" value={squares[6]} handleClick={handleClick} />
          <Square id="7" value={squares[7]} handleClick={handleClick} />
          <Square id="8" value={squares[8]} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
