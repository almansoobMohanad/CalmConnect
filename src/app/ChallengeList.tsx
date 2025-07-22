import React, { useState, useEffect } from "react";

type ChallengesListProps = {
  challenges: string[];
  setChallenges: React.Dispatch<React.SetStateAction<string[]>>;
};

const COMPLETED_KEY = "completedChallenges";

export default function ChallengesList({ challenges, setChallenges }: ChallengesListProps) {
  const [completed, setCompleted] = useState<{ [key: string]: boolean }>({});

  // Load completed state from localStorage on mount
useEffect(() => {
  setCompleted(prev => {
    // Load from localStorage if available
    const saved = localStorage.getItem(COMPLETED_KEY);
    const localCompleted = saved ? JSON.parse(saved) : {};
    const filtered: { [key: string]: boolean } = {};
    challenges.forEach(c => {
      filtered[c] = localCompleted[c] ?? prev[c] ?? false;
    });
    return filtered;
  });
}, [challenges]);

  // Save completed state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(completed));
  }, [completed]);

  // Remove completed state for challenges that no longer exist
  useEffect(() => {
    setCompleted(prev => {
      const filtered: { [key: string]: boolean } = {};
      challenges.forEach(c => {
        if (prev[c]) filtered[c] = true;
      });
      return filtered;
    });
  }, [challenges]);

  const handleToggle = (challenge: string) => {
    setCompleted((prev) => ({ ...prev, [challenge]: !prev[challenge] }));
  };

  const handleRemove = (challenge: string) => {
    setChallenges((prev) => prev.filter((c) => c !== challenge));
    setCompleted((prev) => {
      const copy = { ...prev };
      delete copy[challenge];
      return copy;
    });
  };

  const handleClear = () => {
    setChallenges([]);
    setCompleted({});
    localStorage.removeItem(COMPLETED_KEY);
  };

  return (
    <div style={{ marginTop: 8 }}>
      <h3 style={{ marginBottom: 8 }}>Today's Challenges</h3>
      <button
        onClick={handleClear}
        style={{
          marginBottom: 12,
          padding: "6px 12px",
          borderRadius: 6,
          background: "#f87171",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Clear All
      </button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {challenges.map((challenge, idx) => (
          <li key={idx} style={{ marginBottom: 8, display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              id={`challenge-${idx}`}
              checked={!!completed[challenge]}
              onChange={() => handleToggle(challenge)}
            />
            <label
              htmlFor={`challenge-${idx}`}
              style={{
                marginLeft: 8,
                textDecoration: completed[challenge] ? "line-through" : "none",
                color: completed[challenge] ? "#888" : "inherit",
                flex: 1,
              }}
            >
              {challenge}
            </label>
            <button
              onClick={() => handleRemove(challenge)}
              style={{
                marginLeft: 8,
                background: "none",
                border: "none",
                color: "#f87171",
                cursor: "pointer",
                fontSize: 16,
              }}
              title="Remove"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}