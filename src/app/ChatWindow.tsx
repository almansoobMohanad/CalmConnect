"use client";
import React from "react";
import ReactMarkDown from "react-markdown";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "./chatbot.css";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

type ChatWindowProps = {
  messages: Message[];
  onSend: (text: string) => void;
};

export default function ChatWindow({ messages, onSend }: ChatWindowProps) {
  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageInput onSend={onSend} />
    </div>
  );
}