import React, { useState } from "react";

type MessageInputProps = {
  onSend: (text: string) => void;
};

export default function MessageInput({ onSend }: MessageInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
      <input
        type="text"
        className="message-input-box"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="message-send-button"
      >
        Send
      </button>
    </form>
  );
}