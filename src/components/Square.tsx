// src/components/Square.tsx
// import { useState } from "react";

// 1. Định nghĩa "kiểu" cho props
// Chúng ta nói rằng: "Square sẽ nhận một prop tên là 'value',

// ? và 'value' này có thể là một chuỗi (string) hoặc là null"
// type SquareValue = string | null;

type squareProps = {
  value: string | null;
  onSquareClick: () => void;
};
// truy cập từng loại dữ liệu vào interface/type (object)
export default function Square({ value, onSquareClick }: squareProps) {
  // const [value, setValue] = useState<SquareValue>(null);

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// gọi object thông thường
/** 
 * // or :
 * export default function Square(v: SquareProps) {
    return <button className="square">{v.value}</button>;
 *}
 */
