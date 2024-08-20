// ai.route.ts

import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getGeminiResponse, getChatGptResponse } from "../ai/ai";

const ai = express.Router();

ai.post(
  "/gemini",
  expressAsyncHandler(async (req, res) => {
    const { message } = req.body;
    const response = await getGeminiResponse(message);
    res.send(response);
  })
);

ai.post(
  "/chatgpt",
  expressAsyncHandler(async (req, res) => {
    const { message } = req.body;
    const response = await getChatGptResponse(message);
    res.send(response);
  })
);

export default ai;