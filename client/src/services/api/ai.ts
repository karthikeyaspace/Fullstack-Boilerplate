import apiClient from "../../config/axios";

const geminiRes = async (message: string) => {
  const response = await apiClient.post("/ai/gemini", { message });
  return response.data;
};

const chatGptRes = async (message: string) => {
  const response = await apiClient.post("/ai/chatgpt", { message });
  return response.data;
};

export { geminiRes, chatGptRes };
