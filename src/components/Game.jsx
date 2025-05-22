/**
 * Game Component
 * Handles game state, history, and time travel
 */
import { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
  };

  const moves = history.map((_, move) => {
    const description = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move} className="bg-gray-700 text-white mb-1 p-1 rounded-sm">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex justify-center p-4 gap-10">
      <div>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div>
        <ol className="border border-gray-400 p-1 text-lg">{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
