import MainChatPage from "./MainChatPage";

export default function Home() {
  return (
    <div>
      {/* Logo/Header */}
      <header className="w-full flex items-center mb-8">
        <span
          style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            color: "#001237ff",
            letterSpacing: "0.04em",
            paddingLeft: "0.5rem",
            textShadow: "0 2px 8px rgba(37,99,235,0.12)",
            fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
            textTransform: "uppercase",
          }}
        >
          CalmConnect
        </span>
      </header>
      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center">
        <MainChatPage />
      </main>
    </div>
  );
}