/**
 * Board Component
 * Manages the 3x3 grid and handles click interactions
 */
import calculateWinner from '../utils/calculateWinner';
import Square from './Square';

const Board = ({ xIsNext, squares, onPlay }) => {
  const winner = calculateWinner(squares);
  const isBoardFull = squares.every(square => square !== null);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isBoardFull) {
    status = "Game Over: It's a draw!";
  } else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  };

  const renderSquare = (i) => (
    <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
  );

  return (
    <>
      <div className="mb-2 font-bold">{status}</div>
      {[0, 3, 6].map((row) => (
        <div key={row} className="flex">
          {renderSquare(row)}
          {renderSquare(row + 1)}
          {renderSquare(row + 2)}
        </div>
      ))}
    </>
  );
};

export default Board;
