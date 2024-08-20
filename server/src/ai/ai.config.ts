import { GoogleGenerativeAI } from "@google/generative-ai";
import { OpenAI } from "openai";
import config from "../config/env";

const geminiai = new GoogleGenerativeAI(config.GOOGLE_API_KEY);
const geminimodel = geminiai.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: { responseMimeType: "application/json" },
});

const opeanaimodel = new OpenAI({apiKey: config.OPENAI_API_KEY});

export { opeanaimodel, geminimodel };
