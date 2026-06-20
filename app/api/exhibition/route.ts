import { NextResponse } from "next/server";
import { getExhibitions } from "@/server/services/exhibitionService";

export async function GET() {
  try {
    const data = await getExhibitions();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Exhibitions API 錯誤:", error);
    return NextResponse.json({ error: "無法撈取展覽資料" }, { status: 500 });
  }
}