import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function getChatCompletion(
  messages: { role: string; content: string }[],
  onStream?: (chunk: string) => void
): Promise<string> {
  const contents = messages.map(msg => msg.content).join("\n");

  const stream = await ai.models.generateContentStream({
    model: "gemini-2.0-flash-001",
    contents,
  });

  let fullText = "";
  for await (const chunk of stream) {
    if (onStream) onStream(chunk.text? chunk.text : "");
    fullText += chunk.text;
  }

  return fullText;
}