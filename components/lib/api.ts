export interface Product {
  id: string;
  photoUrls: string[];
  name: string;
  price: number;
  description: string;
  color: string;
  size: string;
  stock: number;
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("/api/dashboard", { cache: "no-store" });
  const data = await res.json();
  return Array.isArray(data.products) ? data.products : [];
}

export async function addProduct(
  product: Omit<Product, "id">
): Promise<Product | null> {
  const res = await fetch("/api/dashboard", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  const data = await res.json();
  return res.ok ? data.product : null;
}

export async function editProduct(product: Product): Promise<Product | null> {
  const res = await fetch("/api/dashboard", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  const data = await res.json();
  return res.ok ? data.product : null;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const res = await fetch("/api/dashboard", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  return res.ok && data.success;
}

export async function loginUser(email: string, password: string): Promise<any> {
  const res = await fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Login failed");
  return data.user;
}
