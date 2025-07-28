"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import { AddProductForm } from "@/components/add-product-form";
import { EditProductForm } from "@/components/edit-product-form";

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

export default function DashboardClient({
  products: initialProducts,
}: {
  products: Product[];
}) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isAddProductDialogOpen, setIsAddProductDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = (newProduct: Omit<Product, "id">) => {
    const id = `prod-${Date.now()}`; // Simple ID generation (client only)
    setProducts((prev) => [...prev, { id, ...newProduct }]);
    setIsAddProductDialogOpen(false);
    // TODO: Call API POST /api/dashboard
  };

  const handleEditProduct = (updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setIsEditDialogOpen(false);
    setEditingProduct(null);
    // TODO: Call API PUT /api/dashboard
  };

  const handleDeleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
    // TODO: Call API DELETE /api/dashboard
  };

  const openEditDialog = (product: Product) => {
    setEditingProduct(product);
    setIsEditDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-x-hidden max-w-full">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <h1 className="text-xl font-semibold">Damaysk Management</h1>
        <div className="ml-auto flex items-center gap-2">
          <Dialog
            open={isAddProductDialogOpen}
            onOpenChange={setIsAddProductDialogOpen}
          >
            <DialogTrigger asChild>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Product
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>
              <AddProductForm
                onAddProduct={handleAddProduct}
                setOpen={setIsAddProductDialogOpen}
              />
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 overflow-x-hidden max-w-full">
        <Card className="w-full max-w-xs sm:max-w-2xl mx-auto rounded-lg p-2 sm:p-4">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl mb-2">
              Product List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full overflow-x-auto">
              <Table className="min-w-[220px] md:min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs md:text-sm">Name</TableHead>
                    <TableHead className="text-xs md:text-sm text-center">
                      Actions
                    </TableHead>
                    <TableHead className="hidden md:table-cell text-xs md:text-sm">
                      Price
                    </TableHead>
                    <TableHead className="hidden md:table-cell text-xs md:text-sm">
                      Description
                    </TableHead>
                    <TableHead className="hidden md:table-cell text-xs md:text-sm">
                      Color
                    </TableHead>
                    <TableHead className="hidden md:table-cell text-xs md:text-sm">
                      Size
                    </TableHead>
                    <TableHead className="hidden md:table-cell text-xs md:text-sm">
                      Stock
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id} className="text-xs md:text-sm">
                      <TableCell className="break-words max-w-[120px] px-2">
                        {product.name}
                      </TableCell>
                      <TableCell className="text-center px-2">
                        <div className="flex justify-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => openEditDialog(product)}
                          >
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        ${product.price.toFixed(2)}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {product.description}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {product.color}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {product.size}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {product.stock}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>

      {editingProduct && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
            </DialogHeader>
            <EditProductForm
              product={editingProduct}
              onEditProduct={handleEditProduct}
              setOpen={setIsEditDialogOpen}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
