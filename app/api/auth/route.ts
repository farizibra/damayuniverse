import { NextResponse } from "next/server";
import { supabase } from "@/components/lib/utils";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set("sb-access-token", data.session.access_token, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60, // 1 jam
      sameSite: "lax",
    });

    return NextResponse.json({ user: data.user });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Internal server error." },
      { status: 500 }
    );
  }
}
