import logger from "../utils/logger";
import { opeanaimodel, geminimodel } from "./ai.config";

// ChatGPT interaction

const prompt = `

  give you custom prompt here- what you want ai to do specifically for you
  specify what you want ai to do clearly 






  user-message: 
`;

export const getChatGptResponse = async (message: string) => {
  try {
    const response = await opeanaimodel.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt + message }],
    });
    return response.choices[0];
  } catch (err) {
    logger("Error in generating chatgpt response", "ai/ai.ts", err);
  }
};

// Gemini interaction
export const getGeminiResponse = async (message: string) => {
  try {
    const response = await geminimodel.generateContent(prompt + message);
    const text = response.response.text();
    return JSON.parse(text);
  } catch (err) {
    logger("Error in generating gemini response", "ai/ai.ts", err);
  }
};
