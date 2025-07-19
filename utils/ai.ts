import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Sends a request to the AI model and returns the response
 * @param {string} input - The user's input/question
 * @returns {Promise<string>} The AI's response
 */
export const askFromAI = async (input: string): Promise<string> => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  const model = genAI.getGenerativeModel({
    model: process.env.AI_MODEL_TEXT || "gemini-1.5-flash"
  });

  // Build prompt
  const fullPrompt = `You are a command line assistant for Node.js developers.

Current user requirement: ${JSON.stringify(input)}
Your job is to convert this requirement into valid **Node.js related terminal commands**.
Output the commands in plain text only.
**Do not output any explanation, description, or code blocks.**
Each command must be on its own line.`.trim();

  try {
    const result = await model.generateContent(fullPrompt);
    const text = (await result.response.text()) || "No response text";
    return text;
  } catch (error) {
    console.error("Error calling AI model:", error);
    throw new Error("Failed to get response from AI model");
  }
};