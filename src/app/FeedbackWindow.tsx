import React, { useState } from "react";
import "./chatbot.css";

export default function FeedbackWindow({ onClose }: { onClose: () => void }) {
  const [feedback, setFeedback] = useState("");

  const sendEmail = () => {
    const subject = encodeURIComponent("User Feedback");
    const body = encodeURIComponent(feedback);
    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="privacy-window">
      <button className="close-btn" onClick={onClose}>Close</button>
      <div style={{ padding: "32px", overflowY: "auto", height: "100%" }}>
        <h2>📝 Send Feedback</h2>
        <p>Let us know how we can improve your experience.</p>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
          style={{
            width: "100%",
            height: "200px",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />
        <div className="button-group">
          <button onClick={sendEmail}>Send Feedback</button>
        </div>
      </div>
    </div>
  );
}
