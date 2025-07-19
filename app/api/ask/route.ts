import { NextRequest, NextResponse } from "next/server";
import { askFromAI } from "@/utils/ai";
import { generateUUID } from "@/utils/uuid";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ConversationRecord {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not found in environment variables" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { input, uuid } = body;
    if (!input || typeof input !== "string") {
      return NextResponse.json(
        { error: "Input is required and must be a string" },
        { status: 400 }
      );
    }

    let conversationId: string;
    let aiResponse: string;
    let records: ConversationRecord[] = [];

    if (uuid) {
      const existingHistory = await prisma.history.findUnique({
        where: { id: uuid }
      });

      if (!existingHistory) {
        return NextResponse.json(
          { error: "Conversation not found with provided UUID" },
          { status: 404 }
        );
      }

      conversationId = uuid;
      records = existingHistory.records as ConversationRecord[];
      
      let fullPrompt = "Previous conversation:\n";
      records.forEach((record: ConversationRecord) => {
        fullPrompt += `${record.role === 'user' ? 'User' : 'Assistant'}: ${record.content}\n`;
      });
      fullPrompt += `\nCurrent user input: ${input}\nPlease continue the conversation.`;

      aiResponse = await askFromAI(fullPrompt);
      
      records.push({ role: 'user', content: input });
      records.push({ role: 'assistant', content: aiResponse });

      await prisma.history.update({
        where: { id: uuid },
        data: { records }
      });

    } else {
      conversationId = generateUUID();
      aiResponse = await askFromAI(input);
      
      records = [
        { role: 'user', content: input },
        { role: 'assistant', content: aiResponse }
      ];

      await prisma.history.create({
        data: {
          id: conversationId,
          records
        }
      });
    }

    return NextResponse.json({ 
      success: true, 
      response: aiResponse,
      uuid: conversationId
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
