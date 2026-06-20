import { NextResponse } from "next/server";
import { getDesignProjects, getProgrammingProjects } from "@/server/services/projectService";

export async function GET(request: Request) {
  try {
    // 取得網址後方的 ?type=... 參數
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (type === "programming") {
      const progProjects = await getProgrammingProjects();
      return NextResponse.json(progProjects);
    } else if (type === "design") {
      const designProjects = await getDesignProjects();
      return NextResponse.json(designProjects);
    }
  } catch (error) {
    console.error("Projects API 錯誤:", error);
    return NextResponse.json({ error: "無法撈取作品資料" }, { status: 500 });
  }
}