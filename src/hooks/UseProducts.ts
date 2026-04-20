import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import type { Pageable } from "../types/Pageable";

export function useProducts() {
  const baseurl: string = "http://localhost:8080/products/";
  const [products, setProducts] = useState<Pageable<Product> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchProducts(
    page: number = 0,
    pageSize: number = 12,
    sort: string = "creationDate,desc",
  ) {
    setLoading(true);
    setError(null);
    try {
      const result = await fetch(
        baseurl +
          "list?page=" +
          page.toString() +
          "&size=" +
          pageSize.toString() +
          "&sort=" +
          sort,
      );
      if (!result.ok) {
        console.log("Something went wrong");
        throw new Error("Failed to fetch products.");
      }
      const json = await result.json();
      console.log(json);
      setProducts(json);
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  async function createProduct(product: Product) {}

  async function deleteProduct(productId: string) {}

  async function updateProduct(modifiedProduct: Product) {}

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    listProducts: fetchProducts,
    createProduct: createProduct,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct,
  };
}
