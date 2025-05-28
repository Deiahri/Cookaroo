import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { FaMicrophone } from "react-icons/fa";
import { RiArrowRightCircleFill, RiResetLeftFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import ChefSueVisualizer from "../../components/ChefSueVisualizer/ChefSueVisualizer";

const mockMessages = [
  { id: 1, sender: "ChefSue", text: "Hello! How can I help you cook today?" },
  { id: 2, sender: "You", text: "What can I make with eggs and tomatoes?" },
  {
    id: 3,
    sender: "ChefSue",
    text: "You can make a delicious omelette! Let me fetch a recipe.",
  },
];

const ChefSue: React.FC = () => {
  const [searchParams] = useSearchParams();
  const v = searchParams.get("v");

  let Comp = v !== "true" ? ChatWithSue : VoiceChatWithSue;
  return (
    <>
      <RiResetLeftFill size={'1.75rem'} style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 100 }}/>
      <Comp />
    </>
  );
};

const VoiceChatWithSue: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          height: "93vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#f8fafc",
          marginBottom: '7vh'
        }}
      >
        <div style={{ textAlign: "center" }}>
          <ChefSueVisualizer />
          <p style={{ marginTop: 12, color: "#555" }}>
            Speak to Sue and get instant cooking help!
          </p>
        </div>
        <button
          style={{
            position: "absolute",
            width: "80vw",
            bottom: "5rem",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "14px 32px",
            background: "#10b981",
            color: "#fff",
            border: "none",
            borderRadius: "24px",
            fontSize: "18px",
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(16,185,129,0.12)",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => navigate("/main/sue")}
        >
          <FaMessage style={{ marginBottom: -3, marginRight: 3 }} /> Text sue
          instead
        </button>
      </div>
    </>
  );
};

const ChatWithSue: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "You", text: input },
      ]);
      setInput("");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
      }}
    >
      <div style={{ flex: "none" }}>
        <div
          style={{
            minHeight: "92vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            background: "#f8fafc",
          }}
        >
          <Header title="Chat With Sue" />
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  alignSelf: msg.sender === "You" ? "flex-end" : "flex-start",
                  background: msg.sender === "You" ? "#d1fae5" : "#e0e7ef",
                  color: "#222",
                  padding: "10px 16px",
                  borderRadius: "18px",
                  maxWidth: "70%",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px",
              borderTop: "1px solid #e5e7eb",
              background: "#fff",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{
                padding: "10px 14px",
                borderRadius: "20px",
                border: "1px solid #d1d5db",
                marginRight: "12px",
                fontSize: "16px",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: "0.25rem",
                background: "#10b981",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                marginRight: "8px",
                cursor: "pointer",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Send"
            >
              <RiArrowRightCircleFill size={"2rem"} color="white" />
            </button>
            <button
              style={{
                padding: "0.5rem",
                background: "#3b82f6",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Microphone"
              onClick={() => navigate("/main/sue?v=true")}
            >
              <FaMicrophone size={"1.5rem"} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSue;
