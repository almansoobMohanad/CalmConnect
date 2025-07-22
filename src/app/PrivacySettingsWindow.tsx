import React, { useState } from "react";
import "./chatbot.css";

export default function PrivacySettingsWindow({ onClose }: { onClose: () => void }) {
  const [shareWithProfessionals, setShareWithProfessionals] = useState(false);
  const [emergencyDisclosure, setEmergencyDisclosure] = useState(false);
  const [anonymousUsage, setAnonymousUsage] = useState(true);
  const [storeChatHistory, setStoreChatHistory] = useState(true);

  const handleExport = () => {
    alert("Data export feature coming soon.");
  };

  const handleDelete = () => {
    alert("All your data will be deleted. (Feature not implemented)");
  };

  return (
    <div className="privacy-window">
      <div className="privacy-window-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>

        <h2>🔐 Privacy Settings</h2>

        <label>
          <input
            type="checkbox"
            checked={shareWithProfessionals}
            onChange={() => setShareWithProfessionals(!shareWithProfessionals)}
          />
          Allow sharing anonymized data with Monash mental health professionals.
        </label>

        <label>
          <input
            type="checkbox"
            checked={emergencyDisclosure}
            onChange={() => setEmergencyDisclosure(!emergencyDisclosure)}
          />
          Allow emergency disclosure if chatbot detects severe crisis.
        </label>

        <label>
          <input
            type="checkbox"
            checked={anonymousUsage}
            onChange={() => setAnonymousUsage(!anonymousUsage)}
          />
          Use chatbot anonymously (no student profile linkage).
        </label>

        <label>
          <input
            type="checkbox"
            checked={storeChatHistory}
            onChange={() => setStoreChatHistory(!storeChatHistory)}
          />
          Store chat history on this device.
        </label>

        <div className="button-group">
          <button onClick={handleExport}>📁 Export My Data</button>
          <button onClick={handleDelete}>🗑️ Delete My Data</button>
        </div>
      </div>
    </div>
  );
}