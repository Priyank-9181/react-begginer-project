export function getWinner(squares) {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningPatterns.length; i++) {
    const [x, y, z] = winningPatterns[i];

    if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
      return squares[x];
    }
  }

  return null;
}

export function handleRestart(setIsXturn, setSquares) {
  setIsXturn(true);
  setSquares(Array(9).fill(""));
}
