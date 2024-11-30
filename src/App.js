import logo from "./logo.svg";
import "./App.css";
import image from "../src/asset/Screenshot 2024-12-01 011611.png";
import ChatBot from "../src/components/ChatBot";
import { useState, useRef } from "react";

function App() {
  const [dialog, setDialog] = useState(null); // Store dialog content and position
  const invisibleDivRef1 = useRef(null); // Ref for the first invisible div
  const invisibleDivRef2 = useRef(null); // Ref for the second invisible div
  const invisibleDivRef3 = useRef(null); // Ref for the third invisible div

  const handleClick = (type, ref) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setDialog({
        content: type === 'tỳ bà' ? (
          <>
            <h2>Đàn tỳ bà</h2>
            <p>
              Du nhập vào nước ta từ thế kỷ XI được dùng trong các ban nhạc thời Lý 
              (Từ thế kỷ XI đến thế kỷ XIII, dưới thời Hậu Lê, có mặt trong các ban nhạc 
              Đường Hạ Chi Nhạc, Đồng Văn Nhã Nhạc (thế kỷ XV),… Trong lịch sử, đàn Tỳ Bà 
              còn có tên là Tứ Huyền Cầm (theo Sách Nhạc Khí Việt Nam, tác giả: GS. Lê Thương).
            </p>
          </>
        ) : type === 'nguyệt' ? (
          <>
            <h2>Đàn nguyệt</h2>
            <p>
              Đàn nguyệt được sử dụng rộng rãi trong dòng nhạc dân gian cũng như cung đình bác học cổ truyền của người Việt, xuất hiện trong mỹ thuật Việt Nam từ thế kỷ XI, cho tới nay nó vẫn giữ một vị trí rất quan trọng trong sinh hoạt âm nhạc của người Việt.
            </p>
          </>
        ) : (
          <>
            <h2>Đàn Nhị</h2>
            <p>
            Đàn nhị còn được gọi là đàn cò, là 1 nhạc cụ thuộc bộ dây. Đàn có 2 dây cần có tên gọi là đàn nhị. Xuất hiện ở nước ta vào khoảng thế kỷ X, được người Kinh, Tày, Thái, Nùng, Dao, Mường, Khmer… tiêu dùng nhiều.
            </p>
          </>
        ),
        position: {
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        },
      });
    }
  };

  const closeDialog = () => {
    setDialog(null); // Close the dialog
  };

  return (
    <div className="App">
      <img src={image} alt="" />

      <div
        ref={invisibleDivRef1} // Attach ref to the first invisible div
        style={{
          width: "100px",
          position: "absolute",
          top: "550px",
          left: "770px",
          height: "100px",
          backgroundColor: "transparent", // Change to transparent for invisibility
          cursor: "pointer",
        }}
        onClick={() => handleClick('tỳ bà', invisibleDivRef1)}
      >
        {/* Invisible div */}
      </div>

      <div
        ref={invisibleDivRef2} // Attach ref to the second invisible div
        style={{
          width: "100px",
          position: "absolute",
          top: "520px",
          left: "270px",
          height: "100px",
          backgroundColor: "transparent", // Change to transparent for invisibility
          cursor: "pointer",
        }}
        onClick={() => handleClick('nguyệt', invisibleDivRef2)}
      >
        {/* Invisible div */}
      </div>

      <div
        ref={invisibleDivRef3} // Attach ref to the third invisible div
        style={{
          width: "100px",
          position: "absolute",
          top: "540px", // Adjust position as needed
          left: "500px", // Adjust position as needed
          height: "150px",
          backgroundColor: "transparent", // Change to transparent for invisibility
          cursor: "pointer",
        }}
        onClick={() => handleClick('ghi ta', invisibleDivRef3)}
      >
        {/* Invisible div */}
      </div>

      {dialog && (
        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            position: "absolute",
            backgroundColor: "white",
            top: dialog.position.top,
            left: dialog.position.left,
            zIndex: 1000, // Ensure it appears above other elements
          }}
        >
          {dialog.content}
          <button onClick={closeDialog}>Close</button>
        </div>
      )}

      <div className="ContentMain">
        <div className="tour">Có gì khó hỏi tour guide</div>
        <ChatBot />
      </div>
    </div>
  );
}

export default App;