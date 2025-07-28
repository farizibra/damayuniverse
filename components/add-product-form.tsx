"use client";

import type React from "react";

import { useState } from "react";
import { addProduct, Product } from "@/components/lib/api";

export function AddProductForm({
  onAddProduct,
  setOpen,
}: {
  onAddProduct: (product: Omit<Product, "id">) => void;
  setOpen: (open: boolean) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [form, setForm] = useState<Omit<Product, "id" | "photoUrls">>({
    name: "",
    price: 0,
    description: "",
    color: "",
    size: "",
    stock: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fs = Array.from(e.target.files || []);
    setFiles(fs);
    setPreviews(fs.map((f) => URL.createObjectURL(f)));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function formatIDR(value: string | number) {
    const number = typeof value === "number" ? value : value.replace(/\D/g, "");
    return Number(number).toLocaleString("id-ID");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    let photoUrls: string[] = [];
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
      const product = { ...form, photoUrls };
      await addProduct(product);
      onAddProduct(product);
      setOpen(false);
    } catch (err: any) {
      setError(err.message || "Gagal tambah produk");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative max-h-screen overflow-y-auto">
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="fixed right-4 top-13 z-50 p-2 bg-white/80 rounded-full shadow hover:bg-gray-200 focus:outline-none"
        aria-label="Tutup"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-full max-h-full overflow-x-hidden pb-10 pt-5 scrollbar-hide"
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
          <div className="flex flex-wrap gap-2 mt-2">
            {previews.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Preview"
                className="max-h-32 rounded"
              />
            ))}
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            maxLength={16}
            required
            className="input text-black border-2 border-gray-300 rounded-md p-2"
            disabled={loading}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            name="price"
            type="text"
            value={formatIDR(form.price)}
            onChange={(e) => {
              const raw = e.target.value.replace(/\D/g, "");
              setForm({ ...form, price: Number(raw) });
            }}
            required
            className="input text-black border-2 border-gray-300 rounded-md p-2"
            disabled={loading}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            maxLength={60}
            required
            className="input text-black px-2 border-2 border-gray-300 rounded-md min-h-[96px] h-24"
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
            className="input text-black border-2 border-gray-300 rounded-md p-2"
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
            className="input text-black border-2 border-gray-300 rounded-md p-2"
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
            className="mb-5 input text-black border-2 border-gray-300 rounded-md p-2"
            disabled={loading}
          />
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/25 text-white text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 animate-shimmer inline-flex items-center gap-1"
          disabled={loading}
        >
          {loading ? "Saving..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
