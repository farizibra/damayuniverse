import { NextResponse } from "next/server";
import { supabase } from "@/components/lib/utils";
import { cookies } from "next/headers";

export const runtime = "edge";

async function getUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("sb-access-token")?.value;
  if (!token) return null;
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) return null;
  return { user: data.user, token };
}

export async function POST(req: Request) {
  const auth = await getUserFromCookie();
  if (!auth)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const fileExt = (file as File).name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2, 8)}.${fileExt}`;
  const { data, error } = await supabase.storage
    .from("product-images")
    .upload(fileName, file as File, { contentType: (file as File).type });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data: publicUrl } = supabase.storage
    .from("product-images")
    .getPublicUrl(fileName);
  return NextResponse.json({ url: publicUrl.publicUrl });
}
