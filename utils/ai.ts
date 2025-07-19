import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Sends a request to the AI model and returns the response
 * @param {string} input - The user's input/question (prompt from frontend)
 * @returns {Promise<string>} The AI's response
 */
export const askFromAI = async (input: string): Promise<string> => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  const model = genAI.getGenerativeModel({
    model: process.env.AI_MODEL_TEXT || "gemini-1.5-flash"
  });

  try {
    const result = await model.generateContent(input);
    const text = (await result.response.text()) || "No response text";
    return text;
  } catch (error) {
    console.error("Error calling AI model:", error);
    throw new Error("Failed to get response from AI model");
  }
};