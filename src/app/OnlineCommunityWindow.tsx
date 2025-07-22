import React from "react";
import "./chatbot.css";

export default function OnlineCommunityWindow({ onClose }: { onClose: () => void }) {
  return (
    <div className="community-window">
      <div style={{ padding: "32px", overflowY: "auto", height: "100%" }}>
        <button
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            background: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "8px 16px",
            cursor: "pointer",
            fontWeight: "bold",
            zIndex: 10,
          }}
          onClick={onClose}
        >
          Close
        </button>

        <h2 style={{ marginBottom: "16px" }}>🌐 Online Communities Hub</h2>
        <p style={{ marginBottom: "24px" }}>
          Connect with supportive online communities to boost your mental wellbeing and feel less alone.
        </p>

        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem", display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Reddit */}
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "#fff",
              gap: "16px",
            }}
          >
            <img
              src="https://redditinc.com/hubfs/Reddit%20Inc/Brand/Reddit_Lockup_Logo.svg
"
              alt="Reddit"
              style={{ width: 40, height: 40 }}
            />
            <div>
              <a href="https://www.reddit.com/r/Monash/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#2563eb", textDecoration: "none" }}>
                r/Monash on Reddit
              </a>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                Join discussions with Monash students worldwide. Ask questions, share advice, or just scroll to feel connected.
              </p>
            </div>
          </li>

          {/* Instagram */}
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "#fff",
              gap: "16px",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              style={{ width: 40, height: 40, borderRadius: 8 }}
            />
            <div>
              <a href="https://www.instagram.com/monash.mha/?hl=en" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#2563eb", textDecoration: "none" }}>
                @monash.mha on Instagram
              </a>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                Follow Monash Mental Health Advocates (MHA) for inspiring posts, event updates, and wellness reminders.
              </p>
            </div>
          </li>

          {/* Discord */}
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "#fff",
              gap: "16px",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg"
              alt="Discord"
              style={{ width: 40, height: 40 }}
            />
            <div>
              <a href="https://discord.com/invite/npr7xrZfVV" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#2563eb", textDecoration: "none" }}>
                Monash Student Discord
              </a>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                A casual space to chat, study together, vent, or find support from peers in real time.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
