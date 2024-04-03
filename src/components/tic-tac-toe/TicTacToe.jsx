import React, { useEffect, useState } from "react";
import styles from "./ticTacToe.module.css";
import { getWinner, handleRestart } from "./utility";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className={styles.square}>
      {value}
    </button>
  );
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) {
      return;
    }
    cpySquares[getCurrentSquare] = isXturn ? "X" : "O";
    setIsXturn(!isXturn);
    setSquares(cpySquares);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This Is The Draw ! Pls Restart The Game");
    } else if (getWinner(squares)) {
      setStatus(`Winner Is ${getWinner(squares)}`);
    } else {
      setStatus(`${isXturn ? "X" : "O"} Turn`);
    }
  }, [squares, isXturn]);
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className="row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <h1>{status}</h1>
      <button onClick={() => handleRestart(setIsXturn, setSquares)}>
        ReStart Game
      </button>
    </div>
  );
}

export default TicTacToe;
