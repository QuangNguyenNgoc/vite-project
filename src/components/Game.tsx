//Game.tsx : main game screen + history data

import Board from "./Board";
import type { SquareValue } from "./Board";
import { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState<Array<Array<SquareValue>>>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares: Array<SquareValue> = history[currentMove];
  console.log(history); //check

  function handlePlay(nextSquares: Array<SquareValue>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove);
  }

  const move = history.map((squares: SquareValue[], move: number) => {
    let description: string;
    if (move > 0) {
      description = "Quay ve buoc #" + move;
    } else {
      description = "Vi tri bat dau";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol>{move}</ol>
        </div>
      </div>
    </>
  );
}
