//Game.tsx : main game screen + history data

import Board from "./Board";
import type { SquareValue } from "./Board";
import { useState } from "react";

export default function Game() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  // tạo mảng chứa mảng lưu trữ null|X|O, giá trị đầu tiên là mảng toàn null
  const [history, setHistory] = useState<Array<Array<SquareValue>>>([
    Array(9).fill(null),
  ]);
  const currentSquares: Array<SquareValue> = history[history.length - 1];
  console.log(history); //check

  function handlePlay(nextSquares: Array<SquareValue>) {
    setHistory([...history, nextSquares]); // "chỉnh" bằng cách dán các dữ liệu cũ + dữ liệu mới
    setXIsNext(!xIsNext); // Cập nhật trạng thái X/O
  }

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
          <ol>{/* TODO*/}</ol>
        </div>
      </div>
    </>
  );
}
