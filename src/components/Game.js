import React, { useState, useEffect } from "react";
import Board from "./Board";
import Point from "./Point";

function Game() {
  //return(<a>test</a>);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [point, setPoint] = useState([0,0]);
  const [showPoint, setShowPoint] = useState(false);

  //Declaring a Winner
  useEffect(() => {
    //"Your code here";
    if(winner!==null && showPoint){
      if(winner==="X") setPoint([point[0]+1,point[1]]);
      else if(winner==="O") setPoint([point[0],point[1]+1]);
      setShowPoint(false);
    }
  }, [point,winner,showPoint]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const checkFull = (input)=> input.filter((e) => e !== null).length ===9;
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    // "Your code here";
    if(squares[i]===null && winner===null){
      squares[i]=xIsNext;
      let result=calculateWinner(squares);
      console.log(result);
      if(result!==null) {
        setWinner(result?  "X" : "O");
        setShowPoint(true);
      } else{
        if(checkFull(squares)) setWinner(0);
        setXIsNext(!xIsNext);
      }
    }
  };

  //Restart game
  const handlRestart = () => {
    // "Your code here";
    setWinner(null);
    setSquares(Array(9).fill(null));
    setShowPoint(false);
  };
  // console.log(point);//test
  return (
    <div className="main">
      <h2 className="result">{winner===0? "Hòa nhau nhé!":winner ? `${winner} thắng rồi!`  : "Chưa phân thắng bại"}</h2>
      <div className="game">
        <span className="player">{winner!==null? 'nhấn nút "chơi lại" để tiếp tục': xIsNext ? "Người chơi tiếp theo là X" : "Người chơi tiếp theo là O"}</span>
        <Board squares={squares} handleClick={handleClick} />
      </div>
      <button onClick={handlRestart} className="restart-btn">
        Chơi lại
      </button>
      <Point point={point} />
    </div>
  );
}

export default Game;
