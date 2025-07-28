"use client";

import type React from "react";

import { useState } from "react";
import { editProduct, Product } from "@/components/lib/api";

export function EditProductForm({
  product,
  onEditProduct,
  setOpen,
}: {
  product: Product;
  onEditProduct: (product: Product) => void;
  setOpen: (open: boolean) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>(product.photoUrls || []);
  const [form, setForm] = useState<Omit<Product, "photoUrls">>({ ...product });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fs = Array.from(e.target.files || []);
    setFiles(fs);
    setPreviews([
      ...(product.photoUrls || []),
      ...fs.map((f) => URL.createObjectURL(f)),
    ]);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    let photoUrls: string[] = product.photoUrls ? [...product.photoUrls] : [];
    try {
      if (files.length > 0) {
        for (const file of files) {
          const formData = new FormData();
          formData.append("file", file);
          const res = await fetch("/api/dashboard/upload", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || "Upload gagal");
          photoUrls.push(data.url);
        }
      }
      const updated = { ...form, photoUrls };
      await editProduct(updated);
      onEditProduct(updated);
      setOpen(false);
    } catch (err: any) {
      setError(err.message || "Gagal edit produk");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-h-[80vh] overflow-y-auto"
    >
      <div>
        <label className="block mb-1 font-medium">Photos</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          disabled={loading}
        />
        <div className="flex flex-wrap gap-2 mt-2 pb-2">
          {previews.map((src, i) => (
            <img key={i} src={src} alt="Preview" className="max-h-32 rounded" />
          ))}
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="input"
          disabled={loading}
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Price</label>
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
          className="input"
          disabled={loading}
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          className="input"
          disabled={loading}
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Color</label>
        <input
          name="color"
          value={form.color}
          onChange={handleChange}
          required
          className="input"
          disabled={loading}
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Size</label>
        <input
          name="size"
          value={form.size}
          onChange={handleChange}
          required
          className="input"
          disabled={loading}
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Stock</label>
        <input
          name="stock"
          type="number"
          value={form.stock}
          onChange={handleChange}
          required
          className="input"
          disabled={loading}
        />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
