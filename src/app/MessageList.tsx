import React from "react";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

type MessageListProps = {
  messages: Message[];
};

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`message-bubble ${msg.sender}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}