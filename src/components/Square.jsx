/**
 * Square Component
 * Represents a single cell in the Tic Tac Toe board
 */
const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg cursor-pointer"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
