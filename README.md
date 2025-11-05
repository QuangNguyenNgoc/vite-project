# Tic-Tac-Toe — React + TypeScript + Vite

Ứng dụng mẫu Tic-Tac-Toe được xây dựng bằng React, TypeScript và Vite. Mục tiêu của repo là minh họa cấu trúc component, state cơ bản (history), và cách tích hợp với Vite.

## Tính năng

- Bàn cờ 3x3 để 2 người chơi (X / O) chơi luân phiên.
- Lưu lịch sử các nước đi (mảng history) — phần UI chuyển đổi lịch sử đang là TODO trong mã nguồn.
- Kiểm tra kết thúc ván và console.log thông báo người thắng.

## Cấu trúc chính của dự án

src/

- App.tsx — điểm vào của ứng dụng, hiển thị tiêu đề và `Game`.
- main.tsx — mount React vào DOM.
- components/
  - Game.tsx — container chính của trò chơi, quản lý state `history` và `xIsNext`.
  - Board.tsx — hiển thị 9 ô, xử lý logic click, tính người thắng (calculateWinner) và gọi `onPlay` để cập nhật history.
  - Square.tsx — nút đơn cho mỗi ô; nhận `value` và `onSquareClick` qua props.

Các file CSS: `index.css` và `App.css` chứa style cơ bản cho bàn cờ.

## Hợp đồng (contract) ngắn cho các component

- Board
  - Props: xIsNext: boolean, squares: ("X"|"O"|null)[], onPlay: (nextSquares) => void
  - Hành vi: khi ô được click, nếu chưa có người thắng và ô rỗng thì gán X/O, gọi onPlay với mảng mới.
- Game
  - Quản lý history: Array<Array<SquareValue>>; currentSquares là phần tử cuối cùng.

## Chạy dự án (Windows PowerShell)

1. Cài phụ thuộc:

```powershell
npm install
```

2. Chạy chế độ phát triển (Vite):

```powershell
npm run dev
```

3. Build cho production:

```powershell
npm run build
```

4. Xem bản build tĩnh (preview):

```powershell
npm run preview
```

5. Kiểm tra lint:

```powershell
npm run lint
```

Các script có sẵn trong `package.json`: `dev`, `build`, `preview`, `lint`.

## Ghi chú kỹ thuật

- TypeScript được cấu hình trong `tsconfig.json`.
- `Board.calculateWinner` kiểm tra 8 tổ hợp thắng cơ bản.
- `Game` lưu lịch sử di chuyển vào state `history` nhưng hiện tại UI hiển thị lịch sử chưa hoàn thiện (`<ol>{/* TODO */}</ol>` trong `Game.tsx`).

## Ý tưởng cải tiến (next steps)

- Hiển thị lịch sử nước đi và cho phép quay lại một nước.
- Làm nổi bật 3 ô thắng khi có người chiến thắng.
- Thêm trạng thái hoà (draw) khi đầy ô mà không có người thắng.
- Thêm test đơn vị cho `calculateWinner`.

## Đóng góp

Mọi đóng góp đều được hoan nghênh: mở issue hoặc pull request. Nếu bạn muốn nâng cấp, hãy tạo nhánh mới từ `main` và gửi PR mô tả thay đổi.

---

Tạo bởi template Vite + React + TypeScript. README này được sinh tự động dựa trên mã nguồn trong `src/`.
