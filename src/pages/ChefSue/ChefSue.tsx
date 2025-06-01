import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { FaMicrophone } from "react-icons/fa";
import { RiArrowRightCircleFill, RiResetLeftFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { FaFile, FaMessage } from "react-icons/fa6";
import ChefSueVisualizer from "../../components/ChefSueVisualizer/ChefSueVisualizer";
import {
  SimData1,
  SimData2,
  SimData3,
  SimData4,
  SimData5,
  SimData6,
  type MessageSimData,
} from "./SimData";
import { sleep } from "../../utils/tools";
import { Theme } from "../../utils/globals";
import { useGlobal, type Message } from "../../hooks/GlobalContext";
import RecipeTile from "../../components/RecipeTile/RecipeTile";
import { getRecipeById } from "../../utils/recipeData";
import styles from "./ChefSue.module.css";

// const mockMessages: Message[] = [
//   { sender: "Chef Sue", text: "Hello! How can I help you cook today?" },
//   { sender: "You", text: "What can I make with eggs and tomatoes?" },
//   {
//     sender: "Chef Sue",
//     text: "You can make a delicious omelette! Let me fetch a recipe.",
//   },
// ];

const ChefSue: React.FC = () => {
  const [searchParams] = useSearchParams();
  const v = searchParams.get("v");
  const { setAlert, messages, setMessages } = useGlobal();

  const resetMessages = () => setMessages([]);

  // Adds a new message to the messages array
  const addMessage = (msg: Message) => {
    setMessages((prev: Message[]) => [...prev, { sender: "Chef Sue", ...msg }]);
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
      if (Object.keys(msg).includes("audioSrc")) {
        updated["audioSrc"] = msg.audioSrc;
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

    const handleKeyDown = async (e: KeyboardEvent) => {
      if (e.key === "[") {
        SimMessageData(SimData1);
      } else if (e.key === "]") {
        SimMessageData(SimData2);
      } else if (e.key === "\\") {
        SimMessageData(SimData3);
      } else if (e.key === ";") {
        SimMessageData(SimData4, 2000);
        await sleep(800);
        setAlert(
          "Sue updated your profile",
          "Added peanut allergy and lactose intolerance."
        );
      } else if (e.key === "'") {
        SimMessageData(SimData5, 3000);
      } else if (e.key === "/") {
        SimMessageData(SimData6, 2000);
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
          top: "1.4rem",
          right: "1rem",
          zIndex: 100,
          opacity: messages.length === 0 ? 0.4 : 1,
          cursor: messages.length === 0 ? "not-allowed" : "pointer",
          pointerEvents: messages.length === 0 ? "none" : "auto",
        }}
        aria-disabled={messages.length === 0}
      />
      <Comp messages={messages} />
    </>
  );
};

function VoiceChatWithSue({ messages }: { messages: Message[] }) {
  const navigate = useNavigate();
  const lastMessage =
    messages && messages.length > 0 ? messages[messages.length - 1] : undefined;
  const recipeData = lastMessage?.recipe
    ? getRecipeById(lastMessage.recipe)
    : undefined;

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
          <div style={{ position: "absolute", top: "8rem" }}>
            <ChefSueVisualizer
              audioSrc={lastMessage?.audioSrc}
              disableSue={lastMessage?.sender == "You"}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "14rem",
              width: "90vw",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {lastMessage?.thinking && <Thinking color={Theme.almostWhite} />}{" "}
            {
              <div
                style={{
                  width: "100vw",
                  display: "flex",
                  height: recipeData ? "40vh" : "0vh",
                  overflow: "hidden",
                  opacity: recipeData ? 1 : 0,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  position: "absolute",
                  top: "-22vh",
                  transition:
                    "height 900ms ease-in-out, opacity 900ms ease-in-out, top 500ms ease-in-out",
                }}
              >
                {recipeData && <RecipeTile small={false} {...recipeData} />}
              </div>
            }
            {!lastMessage?.thinking && recipeData == undefined && (
              <span
                style={{
                  fontSize: "1.25rem",
                  color: "#555",
                  width: "90vw",
                  textAlign: "center",
                }}
              >
                {lastMessage?.sender == "You"
                  ? "Listening..."
                  : lastMessage?.text || "How can I help today?"}
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
}: // setMessages,
{
  messages: Message[];
  // setMessages: (s: Message[]) => void;
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on mount and when messages change (if user is near bottom)
  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // If user is within 120px of bottom, auto-scroll
    const isNearBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight < 300;

    if (isNearBottom) {
      scrollToBottom();
    }
    // if (isNearBottom || messages.length === 1) {
    // }
  }, [messages]);

  // On mount, always scroll to bottom
  React.useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  };

  // console.log(scrollRef.current?.scrollTop);

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
      <div style={{ flex: "none" }} >
        <div
          style={{
            maxHeight: "92vh",
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
              padding: "80px 24px",
              paddingBottom: 75,
              boxSizing: 'border-box',
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              overflowY: 'auto',
              minHeight: '90vh'
            }}
            ref={scrollRef}
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
            {messages.map((msg, i, arr) => {
              const prevWasSame =
                i > 0 ? arr[i - 1].sender == msg.sender : false;
              const senderIsSelf = msg.sender === "You";
              const recipeData = msg.recipe
                ? getRecipeById(msg.recipe)
                : undefined;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: senderIsSelf ? "end" : "start",
                    flexDirection: "column",
                  }}
                  className={styles.floatIn}
                >
                  {!prevWasSame && <span>{msg.sender}</span>}
                  <div
                    style={{
                      alignSelf: senderIsSelf ? "flex-end" : "flex-start",
                      background: senderIsSelf ? "#0002" : Theme.orange,
                      color: senderIsSelf ? Theme.darkGrey : "#fff",
                      padding: recipeData ? 0 : "10px 16px",
                      borderRadius: "18px",
                      maxWidth: "70%",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    {msg.thinking && <Thinking color={Theme.almostWhite}/>}
                    {recipeData && !msg.thinking && (
                      <RecipeTile {...recipeData} small={true} />
                    )}
                    {msg.attatchment && (
                      <div
                        style={{
                          display: "flex",
                          gap: "0.25rem",
                          alignItems: "center",
                        }}
                      >
                        <FaFile />
                        <span style={{ fontWeight: 700 }}>
                          {msg.attatchment}
                        </span>
                      </div>
                    )}
                    {!msg.thinking && !msg.recipe && !msg.attatchment && (
                      <span>{msg.text}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <ChefSueKeyboard />
        </div>
      </div>
    </div>
  );
}

export function ChefSueKeyboard({
  style,
  onSend,
}: {
  style?: React.CSSProperties;
  onSend?: () => any;
}) {
  const navigate = useNavigate();
  const { setMessages } = useGlobal();
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend && onSend();
      setTimeout(
        () => {
          setMessages((messages) => [
            ...messages,
            { sender: "You", text: input },
          ]);
        },
        onSend ? 1000 : 0
      );
      setInput("");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "16px",
        borderTop: "1px solid #e5e7eb",
        background: "#fff",
        position: "fixed",
        bottom: "3.8rem",
        width: "100%",
        ...style,
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
          marginRight: "8px",
          fontSize: "16px",
          width: "60vw",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />
      <button
        onClick={handleSend}
        style={{
          padding: "0.25rem",
          background: "#3b82f6",
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
  );
}

const Thinking: React.FC<{ size?: number, color?: string }> = ({ size = 8, color = Theme.orange }) => {
  const dotStyle: React.CSSProperties = {
    display: "inline-block",
    width: size,
    height: size,
    margin: `0 ${size * 0.15}px`,
    borderRadius: "50%",
    background: color,
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
