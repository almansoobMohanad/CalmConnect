import React from "react";
import ChallengesList from "./ChallengeList";
import "./sidebar.css";

type Chat = {
  id: number;
  name: string;
  messages: { id: number; sender: "user" | "bot"; text: string }[];
};

type SidebarProps = {
  chats: Chat[];
  selectedChatId: number;
  onSelectChat: (id: number) => void;
  onNewChat: () => void;
  challenges: string[];
  setChallenges: React.Dispatch<React.SetStateAction<string[]>>;
  onOpenCommunityWindow: () => void;
  onOpenPrivacyWindow: () => void;
  onOpenCorpusWindow: () => void;
  onOpenFeedbackWindow: () => void; // <-- Add this prop
};

export default function Sidebar({
  chats,
  selectedChatId,
  onSelectChat,
  onNewChat,
  challenges,
  setChallenges,
  onOpenCommunityWindow,
  onOpenPrivacyWindow,
  onOpenCorpusWindow,
  onOpenFeedbackWindow, // <-- Add this prop
}: SidebarProps) {
  const [activeTab, setActiveTab] = React.useState<
    "chats" | "challenges" | "menu"
  >("chats");

  return (
    <div className="sidebar">
      {/* Burger menu */}
      <div className="sidebar-header">
        <button
          aria-label="Menu"
          className="sidebar-burger"
          onClick={() => setActiveTab("menu")}
        >
          <span>&#9776;</span>
        </button>
        <button
          className={`sidebar-tab${activeTab === "chats" ? " active" : ""}`}
          onClick={() => setActiveTab("chats")}
        >
          Chats
        </button>
        <button
          className={`sidebar-tab${activeTab === "challenges" ? " active" : ""}`}
          onClick={() => setActiveTab("challenges")}
        >
          Challenges
        </button>
      </div>

      {/* Tabs */}
      {activeTab === "chats" && (
        <>
          <button
            className="sidebar-menu-btn"
            onClick={onNewChat}
            style={{ marginBottom: 16 }}
          >
            + New Chat
          </button>
          <ul className="sidebar-list">
            {chats.map((chat) => (
              <li
                key={chat.id}
                className={`sidebar-list-item${chat.id === selectedChatId ? " selected" : ""}`}
                onClick={() => onSelectChat(chat.id)}
              >
                {chat.name}
              </li>
            ))}
          </ul>
        </>
      )}
      {activeTab === "challenges" && (
        <ChallengesList
          challenges={challenges}
          setChallenges={setChallenges}
        />
      )}
      {activeTab === "menu" && (
        <div className="sidebar-menu">
          <h3 className="sidebar-menu-title">Menu</h3>
          <ul className="sidebar-menu-list">
            <li>
              <button
                className="sidebar-menu-btn"
                onClick={() => setActiveTab("chats")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="sidebar-menu-btn"
                onClick={onOpenCommunityWindow}
              >
                Online Communities Hub
              </button>
            </li>
            <li>
              <button
                className="sidebar-menu-btn"
                onClick={onOpenCorpusWindow}
              >
                Mental Health Corpus
              </button>
            </li>
            <li>
              <button
                className="sidebar-menu-btn"
                onClick={onOpenPrivacyWindow}
              >
                Privacy Settings
              </button>
            </li>
            <li>
              <button
                className="sidebar-menu-btn"
                onClick={onOpenFeedbackWindow}
              >
                Feedback
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}