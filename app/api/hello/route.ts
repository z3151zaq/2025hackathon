import { NextRequest, NextResponse } from "next/server";

/**
 * Example API route handler.
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} JSON response with a greeting message.
 * @example
 * // GET /api/hello
 * // Response: { "message": "Hello from API!" }
 */
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello from API!" });
} 