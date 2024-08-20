import { opeanaimodel, geminimodel } from "./ai.config";

// ChatGPT interaction
export const getChatGptResponse = async (prompt: string) => {
  if (!prompt) prompt = "Hello, how are you doing today?";
  const response = await opeanaimodel.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  return response.choices[0];
};

// Gemini interaction
export const getGeminiResponse = async (prompt: string) => {
  if (!prompt) prompt = "Hello, how are you doing today?";
  const response = await geminimodel.generateContent(prompt);
  const text = response.response.text();
  return JSON.parse(text);
};
