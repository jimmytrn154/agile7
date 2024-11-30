// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css'; // Add basic styles here

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Xin chào! Bạn cần giải đáp gì nhỉ?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      const botResponse = {
        sender: "bot",
        text: generateBotResponse(input), // Custom bot response function
      };

      setMessages([...messages, userMessage, botResponse]);
      setInput("");
    }
  };

  const generateBotResponse = (userInput) => {
    // Customize bot response logic here
    if (userInput.toLowerCase().includes("explain")) {
      return "Về tổ chức Nhã nhạc thời Nguyễn, theo sách Khâm định Đại Thanh hội điển sử lệ xuất bản năm 1908, biên chế dàn nhạc cung đình Việt Nam vào cuối thế kỷ XVIII gồm có: 1 trống bản, 1 phách (sinh tiền), 2 sáo, 1 huyền tử (tức tam huyền tử, đàn tầm), 1 hồ cầm (đàn nhị), 1 song vận (nguyệt cầm), 1 tì bà, 1 tam âm là (chùm thành là bằng đồng 3 chiếc). 😊";
    } else if (userInput.toLowerCase().includes("help")) {
      return "Sure, what do you need help with?";
    } else {
      return "Tôi đang đợi 15 triệu từ BTC để có thể khôn hơn nhằm trả lời bạn, hãy đợi nhé!";
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
