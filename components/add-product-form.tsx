"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AddProductFormProps {
  onAddProduct: (product: Omit<Product, "id">) => void;
  setOpen: (open: boolean) => void;
}

interface Product {
  id: string;
  photoUrl: string;
  name: string;
  price: number;
  description: string;
  color: string;
  size: string;
  stock: number;
}

export function AddProductForm({ onAddProduct, setOpen }: AddProductFormProps) {
  const [formData, setFormData] = useState<Omit<Product, "id">>({
    photoUrl: "/placeholder.svg?height=64&width=64",
    name: "",
    price: 0,
    description: "",
    color: "",
    size: "",
    stock: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]:
        id === "price" || id === "stock"
          ? Number.parseFloat(value) || 0
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="photoUrl" className="text-right">
          Photo URL
        </Label>
        <Input
          id="photoUrl"
          value={formData.photoUrl}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="price" className="text-right">
          Price
        </Label>
        <Input
          id="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          className="col-span-3"
          required
          step="0.01"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right">
          Description
        </Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="color" className="text-right">
          Color
        </Label>
        <Input
          id="color"
          value={formData.color}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="size" className="text-right">
          Size
        </Label>
        <Input
          id="size"
          value={formData.size}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="stock" className="text-right">
          Stock
        </Label>
        <Input
          id="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          className="col-span-3"
          required
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit">Add Product</Button>
      </div>
    </form>
  );
}
