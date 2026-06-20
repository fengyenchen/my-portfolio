import { NextResponse } from "next/server";
import { getAboutPageData } from "@/server/services/aboutService";

export async function GET() {
  try {
    const aboutData = await getAboutPageData();
    return NextResponse.json(aboutData);
  } catch (error) {
    return NextResponse.json({ error: "無法取得 About 資料" }, { status: 500 });
  }
}