import { NextResponse } from "next/server";
import { getTypingText } from "@/server/services/typingTextService";

export async function GET() {
  try {
    const data = await getTypingText();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Typing Text API 錯誤:", error);
    return NextResponse.json({ error: "無法撈取打字機資料" }, { status: 500 });
  }
}