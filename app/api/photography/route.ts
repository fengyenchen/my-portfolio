import { NextResponse } from "next/server";
import { getPhotographyList } from "@/server/services/photographyService";

export async function GET() {
  try {
    const data = await getPhotographyList();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Photography API 錯誤:", error);
    return NextResponse.json({ error: "無法撈取攝影資料" }, { status: 500 });
  }
}