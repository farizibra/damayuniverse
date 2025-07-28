import { cookies } from "next/headers";
import { supabase } from "@/components/lib/utils";
import { redirect } from "next/navigation";
import DashboardClient from "@/components/dashboard-client";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("sb-access-token")?.value;
  if (!token) redirect("/admin");

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) redirect("/admin");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/dashboard`, {
    headers: { Cookie: `sb-access-token=${token}` },
    cache: "no-store",
  });
  const { products } = await res.json();

  return <DashboardClient products={Array.isArray(products) ? products : []} />;
}
