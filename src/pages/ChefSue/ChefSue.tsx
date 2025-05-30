import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { FaMicrophone } from "react-icons/fa";
import { RiArrowRightCircleFill, RiResetLeftFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import ChefSueVisualizer from "../../components/ChefSueVisualizer/ChefSueVisualizer";
import { SimData1, SimData2, SimData3, SimData4, type MessageSimData } from "./SimData";
import { sleep } from "../../utils/tools";
import { Theme } from "../../utils/globals";

type Message = {
  sender?: string;
  text: string;
  thinking?: boolean;
  audioSrc?: string;
  recipe?: string;
};

const mockMessages: Message[] = [
  { sender: "Chef Sue", text: "Hello! How can I help you cook today?" },
  { sender: "You", text: "What can I make with eggs and tomatoes?" },
  {
    sender: "Chef Sue",
    text: "You can make a delicious omelette! Let me fetch a recipe.",
  },
];

const ChefSue: React.FC = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [searchParams] = useSearchParams();
  const v = searchParams.get("v");

  const resetMessages = () => setMessages([]);

  // Adds a new message to the messages array
  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, { sender: "Chef Sue", ...msg }]);
  };

  // Appends/updates the last message by merging with the provided message object
  const appendToLastMessage = (msg: Message) => {
    setMessages((prev) => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      const updated = { ...last, text: (last.text + " " + msg.text).trim() };
      if (Object.keys(msg).includes("thinking")) {
        updated["thinking"] = msg.thinking;
      }
      if (Object.keys(msg).includes('audioSrc')) {
        updated['audioSrc'] = msg.audioSrc;
      }
      return [...prev.slice(0, -1), updated];
    });
  };

  React.useEffect(() => {
    const SimMessageData = async (
      simMessages: MessageSimData[],
      thinkMS: number = 1500
    ) => {
      addMessage({ text: "", thinking: true });
      await sleep(thinkMS);
      appendToLastMessage({ text: "", thinking: false });
      for (let simMessage of simMessages) {
        if (simMessage.newLine) {
          addMessage(simMessage);
        } else {
          appendToLastMessage(simMessage);
        }
        await sleep(simMessage.delay);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "[") {
        SimMessageData(SimData1);
      } else if (e.key === "]") {
        SimMessageData(SimData2);
      } else if (e.key === "\\") {
        SimMessageData(SimData3);
      } else if (e.key === ";") {
        SimMessageData(SimData4);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  let Comp = v !== "true" ? ChatWithSue : VoiceChatWithSue;
  return (
    <>
      <RiResetLeftFill
        onClick={messages.length === 0 ? undefined : resetMessages}
        size={"1.75rem"}
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 100,
          opacity: messages.length === 0 ? 0.4 : 1,
          cursor: messages.length === 0 ? "not-allowed" : "pointer",
          pointerEvents: messages.length === 0 ? "none" : "auto",
        }}
        aria-disabled={messages.length === 0}
      />
      <Comp messages={messages} setMessages={setMessages} />
    </>
  );
};

function VoiceChatWithSue({ messages }: { messages: Message[] }) {
  const navigate = useNavigate();
  const lastMessage =
    messages && messages.length > 0 ? messages[messages.length - 1] : undefined;
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
          marginBottom: "7vh",
        }}
      >
        <Header title="Talk to Sue" style={{ position: "fixed", top: 0 }} />
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ position: 'absolute', top: '8rem' }}>
            <ChefSueVisualizer audioSrc={lastMessage?.audioSrc} disableSue={lastMessage?.sender == 'You'} />
          </div>
          <div style={{ position: 'absolute', bottom: '14rem', width: '90vw' }}>
            {lastMessage?.thinking ? (
              <Thinking />
            ) : (
              <span
                style={{
                  fontSize: "1.25rem",
                  color: "#555",
                  width: "90vw",
                  textAlign: "center",
                }}
              >
                {lastMessage?.sender == "You" ? 'Listening...' : (lastMessage?.text || "How can I help today?")}
              </span>
            )}
          </div>
        </div>
        <button
          style={{
            position: "absolute",
            width: "80vw",
            bottom: "2.5rem",
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
}

function ChatWithSue({
  messages,
  setMessages,
}: {
  messages: Message[];
  setMessages: (s: Message[]) => void;
}) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "You", text: input }]);
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
          <Header
            title="Chat With Sue"
            style={{ position: "fixed", top: 0, zIndex: 10 }}
          />
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "70px 24px",
              paddingBottom: "145px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {messages.length == 0 && (
              <div
                style={{
                  height: "70vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>
                  How can I help today?
                </span>
              </div>
            )}
            {messages.map((msg, i) => {
              const prevWasSame =
                i > 0 ? messages[i - 1].sender == msg.sender : false;
              const senderIsSelf = msg.sender === "You";
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: senderIsSelf ? "end" : "start",
                    flexDirection: "column",
                  }}
                >
                  {!prevWasSame && <span>{msg.sender}</span>}
                  <div
                    key={i}
                    style={{
                      alignSelf: senderIsSelf ? "flex-end" : "flex-start",
                      background: senderIsSelf ? "#d1fae5" : "#e0e7ef",
                      color: "#222",
                      padding: "10px 16px",
                      borderRadius: "18px",
                      maxWidth: "70%",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    {msg.thinking ? <Thinking /> : <span>{msg.text}</span>}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px",
              borderTop: "1px solid #e5e7eb",
              background: "#fff",
              position: "fixed",
              bottom: "4rem",
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
}

const Thinking: React.FC<{ size?: number }> = ({ size = 8 }) => {
  const dotStyle: React.CSSProperties = {
    display: "inline-block",
    width: size,
    height: size,
    margin: `0 ${size * 0.15}px`,
    borderRadius: "50%",
    background: Theme.orange,
    animation: "thinking-bounce 1.2s infinite both",
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: size * 1.2,
      }}
    >
      <span style={{ ...dotStyle, animationDelay: "0s" }} />
      <span style={{ ...dotStyle, animationDelay: "0.2s" }} />
      <span style={{ ...dotStyle, animationDelay: "0.4s" }} />
      <style>
        {`
          @keyframes thinking-bounce {
            0%, 80%, 100% { transform: translateY(0); opacity: 0.7; }
            40% { transform: translateY(-${size * 0.6}px); opacity: 1; }
          }
        `}
      </style>
    </span>
  );
};

export default ChefSue;
