import { NextRequest, NextResponse } from "next/server";
import { askFromAI } from "@/utils/ai";

/**
 * POST endpoint to handle AI requests
 * @param {NextRequest} request - The incoming request
 * @returns {Promise<NextResponse>} The AI response or error
 */
export async function POST(request: NextRequest) {
  try {
    // Check if API key is available
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not found in environment variables" },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { input } = body;

    // Validate input
    if (!input || typeof input !== "string") {
      return NextResponse.json(
        { error: "Input is required and must be a string" },
        { status: 400 }
      );
    }

    // Call AI function
    const response = await askFromAI(input);

    // Return the AI response
    return NextResponse.json({ 
      success: true, 
      response 
    });

  } catch (error) {
    console.error("Error in ask API:", error);
    return NextResponse.json(
      { 
        error: "Failed to process request",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
