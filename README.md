# CalmConnect – Mental Health Chatbot Prototype

CalmConnect is a prototype web application built with Next.js, designed to support the mental health of university students. It features a conversational chatbot powered by the Gemini API, along with resources, feedback, and community features. This project is intended for demonstration and prototyping purposes only.

---

## Features

- Conversational chatbot for mental health support (Gemini API)
- Resource corpus for mental health information
- Feedback collection window
- Online community window
- Privacy settings
- Modern, responsive UI

---

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd try-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up your Gemini API key:**
    - Create a `.env.local` file in the root directory of your project (at the same level as `package.json`).
    - Add the following line to `.env.local`, replacing `your_api_key_here` with your actual Gemini API key:
      ```
      GEMINI_API_KEY=your_api_key_here
      ```
    - Save the file. The application will automatically load this environment variable when you start the development server.

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Project Structure

```
src/app/              # Main application components and pages
src/GeminiService.tsx # Handles communication with the Gemini API
src/GeminiPrompt.tsx  # Chatbot prompt logic
src/app/chatbot.css   # Main styles for the chatbot and windows
```

---

## Environment Variables

- `GEMINI_API_KEY` – Your Gemini API key (**required**)

---

## Disclaimer

This project is a prototype and not intended for clinical use. The chatbot does not provide medical advice. For real mental health support, please consult a professional.

---

## License

This project is for educational and demonstration purposes only.