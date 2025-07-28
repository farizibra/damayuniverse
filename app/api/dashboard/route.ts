import { NextResponse } from "next/server";
import { supabase } from "@/components/lib/utils";
import { cookies } from "next/headers";

// Helper: auth check
async function getUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("sb-access-token")?.value;
  if (!token) return null;
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) return null;
  return { user: data.user, token };
}

// GET: List produk
export async function GET() {
  const auth = await getUserFromCookie();
  if (!auth)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data, error } = await supabase.from("products").select("*");
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ products: data });
}

// POST: Tambah produk
export async function POST(req: Request) {
  const auth = await getUserFromCookie();
  if (!auth)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  // Hanya simpan photoUrls (array), bukan photoUrl
  const { data, error } = await supabase
    .from("products")
    .insert([{ ...body, photoUrls: body.photoUrls }])
    .select();
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ product: data[0] });
}

// PUT: Edit produk
export async function PUT(req: Request) {
  const auth = await getUserFromCookie();
  if (!auth)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  if (!body.id)
    return NextResponse.json({ error: "Missing product id" }, { status: 400 });
  const { data, error } = await supabase
    .from("products")
    .update({ ...body, photoUrls: body.photoUrls })
    .eq("id", body.id)
    .select();
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ product: data[0] });
}

// DELETE: Hapus produk
export async function DELETE(req: Request) {
  const auth = await getUserFromCookie();
  if (!auth)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  if (!body.id)
    return NextResponse.json({ error: "Missing product id" }, { status: 400 });
  const { error } = await supabase.from("products").delete().eq("id", body.id);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
