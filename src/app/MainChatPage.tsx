"use client";
import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import { getChatCompletion } from "../GeminiService";
import geminiPrompt from "@/GeminiPrompt";
import Sidebar from "./Sidebar";
import OnlineCommunityWindow from "./OnlineCommunityWindow";
import PrivacySettingsWindow from "./PrivacySettingsWindow";
import MentalHealthCorpusWindow from "./MentalHealthCorpusWindow";
import FeedbackWindow from "./FeedbackWindow";

const generateId = () => Date.now() + Math.floor(Math.random() * 1000);

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

type Chat = {
  id: number;
  name: string;
  messages: Message[];
};

export default function MainChatPage() {
  const [showCommunityWindow, setShowCommunityWindow] = useState(false);
  const [showPrivacyWindow, setShowPrivacyWindow] = useState(false);
  const [showCorpusWindow, setShowCorpusWindow] = useState(false);
  const [showFeedbackWindow, setShowFeedbackWindow] = useState(false);

  const [chats, setChats] = useState<Chat[]>([
    {
      id: generateId(),
      name: "Chat 1",
      messages: [{ id: generateId(), sender: "bot", text: "Welcome to the chat! This is Capreo your mental health assistant" }],
    },
  ]);
  const [selectedChatId, setSelectedChatId] = useState(chats[0].id);
  const [challenges, setChallenges] = useState<string[]>([]);

  const handleNewChat = () => {
    const newId = generateId();
    setChats([
      ...chats,
      {
        id: newId,
        name: `Chat ${chats.length + 1}`,
        messages: [{ id: generateId(), sender: "bot", text: "New chat started!" }],
      },
    ]);
    setSelectedChatId(newId);
    setChallenges([]);
    setShowCommunityWindow(false); // Close community window when creating a new chat
    setShowPrivacyWindow(false); // Close privacy window when creating a new chat
    setShowCorpusWindow(false);
    setShowFeedbackWindow(false);
  };

  const handleSelectChat = (id: number) => {
    setSelectedChatId(id);
    setShowCommunityWindow(false); // Close community window when selecting a chat
    setShowPrivacyWindow(false); // Close privacy window when selecting a chat
    setShowCorpusWindow(false);
    setShowFeedbackWindow(false);
  };

  function extractChallenges(text: string): string[] {
    return text
      .split("\n")
      .filter(line => line.trim().toLowerCase().startsWith('#challenge:'))
      .map(line => line.replace(/^#challenge:/i, '').trim());
  }

  const handleSendMessage = async (text: string) => {
    const currentChat = chats.find((chat) => chat.id === selectedChatId);
    if (!currentChat) return;

    const geminiMessages = [
      geminiPrompt,
      ...currentChat.messages.map((msg) => msg.text),
      text,
    ];
    const contents = geminiMessages.join("\n");

    const userMsgId = generateId();
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === selectedChatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { id: userMsgId, sender: "user", text },
              ],
            }
          : chat
      )
    );

    const botMsgId = generateId();
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === selectedChatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { id: botMsgId, sender: "bot", text: "" },
              ],
            }
          : chat
      )
    );

    let botReply = "";
    await getChatCompletion(
      [{ role: "user", content: contents }],
      (chunk) => {
        botReply += chunk;
        setChats((prevChats) =>
          prevChats.map((chat) =>
            chat.id === selectedChatId
              ? {
                  ...chat,
                  messages: chat.messages.map((msg) =>
                    msg.id === botMsgId
                      ? { ...msg, text: msg.text + chunk }
                      : msg
                  ),
                }
              : chat
          )
        );
        const newChallenges = extractChallenges(botReply);
        setChallenges(newChallenges);
      }
    );
  };

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        chats={chats}
        selectedChatId={selectedChatId}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        challenges={challenges}
        setChallenges={setChallenges}
        onOpenCommunityWindow={() => {
          setShowCommunityWindow(true);
          setShowPrivacyWindow(false);
          setShowCorpusWindow(false);
          setShowFeedbackWindow(false);
        }}
        onOpenPrivacyWindow={() => {
          setShowPrivacyWindow(true);
          setShowCommunityWindow(false);
          setShowCorpusWindow(false);
          setShowFeedbackWindow(false);
        }}
        onOpenCorpusWindow={() => {
          setShowCorpusWindow(true);
          setShowCommunityWindow(false);
          setShowPrivacyWindow(false);
          setShowFeedbackWindow(false);
        }}
        onOpenFeedbackWindow={() => {
          setShowFeedbackWindow(true);
          setShowCommunityWindow(false);
          setShowPrivacyWindow(false);
          setShowCorpusWindow(false);
        }}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {showCommunityWindow ? (
          <OnlineCommunityWindow onClose={() => setShowCommunityWindow(false)} />
        ) : showPrivacyWindow ? (
          <PrivacySettingsWindow onClose={() => setShowPrivacyWindow(false)} />
        ) : showCorpusWindow ? (
          <MentalHealthCorpusWindow onClose={() => setShowCorpusWindow(false)} />
        ) : showFeedbackWindow ? (
          <FeedbackWindow onClose={() => setShowFeedbackWindow(false)} />
        ) : selectedChat ? (
          <ChatWindow messages={selectedChat.messages} onSend={handleSendMessage} />
        ) : (
          <div style={{ padding: 32, color: "#888" }}>
            Select a chat to start messaging.
          </div>
        )}
      </div>
    </div>
  );
}
