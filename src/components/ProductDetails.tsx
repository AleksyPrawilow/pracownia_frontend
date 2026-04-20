import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useProductDetails } from "../hooks/UseProductDetails";
import { useEffect } from "react";
import { ProductView } from "./ProductView";

export function ProductDetails() {
  const pageParams = useParams();
  const id = pageParams.id;
  const {
    product,
    loading,
    error,
    fetchProduct,
    updateProduct,
    deleteProduct,
  } = useProductDetails();

  useEffect(() => {
    if (id != null) {
      fetchProduct(id);
    }
  }, [id]);

  return (
    <>
      {!loading && error === null && product != null && (
        <ProductView
          title={product.title}
          description={product.description}
          price={product.price}
          id={product.id}
          creation_date={product.creationDate}
          creator_user_id={product.creatorUserId}
          image_url={product.imageUrl}
        />
      )}
    </>
  );
}
