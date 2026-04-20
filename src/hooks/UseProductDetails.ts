import { useState } from "react";
import type { Product } from "../types/Product";

export function useProductDetails() {
  const baseurl: string = "http://localhost:8080/products/";
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchProductDetails(productId: string) {
    setLoading(true);
    setError(null);
    try {
      const result = await fetch(baseurl + "find/" + productId);
      if (!result.ok) {
        console.log("Something went wrong");
        throw new Error("Failed to fetch products.");
      }
      const json = await result.json();
      console.log(json);
      setProduct(json);
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  async function deleteProduct(productId: string) {}

  async function updateProduct(modifiedProduct: Product) {}

  return {
    product,
    loading,
    error,
    fetchProduct: fetchProductDetails,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct,
  };
}
