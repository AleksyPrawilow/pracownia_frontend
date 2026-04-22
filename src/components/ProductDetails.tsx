import { Card, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useProductDetails } from "../hooks/UseProductDetails";
import { useEffect, useState } from "react";
import { ProductDetailsAndPurchasePanel } from "./ProductDetailsAndPurchasePanel";
import StarIcon from "@mui/icons-material/Star";
import { ProductReviewSummary } from "./ProductReviewSummary";
import { ProductReviewsDrawer } from "./ProductReviewsDrawer";

export function ProductDetails() {
  const pageParams = useParams();
  const [reviewsOpened, setReviewsOpened] = useState(false);
  const id = pageParams.id;
  const {
    product,
    loading,
    error,
    fetchProduct,
    updateProduct,
    deleteProduct,
  } = useProductDetails();

  const toggleDrawer = (value: boolean) => {
    setReviewsOpened(value);
  };

  useEffect(() => {
    if (id != null) {
      fetchProduct(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {!loading && error === null && product != null && (
        <ProductReviewsDrawer
          title={product.title}
          imageUrl={product.imageUrl}
          open={reviewsOpened}
          toggleDrawer={toggleDrawer}
          id={product?.id}
        />
      )}
      <Grid container spacing={2} sx={{ p: 2 }}>
        {!loading && error === null && product != null && (
          <>
            <Grid size={8}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Stack direction="column" sx={{ p: 2, width: "100%" }}>
                  <Typography variant="h4">
                    {product.title.toUpperCase()}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 300 }}>
                    {product.id}
                  </Typography>
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      paddingBottom: 2,
                    }}
                  >
                    <StarIcon sx={{ color: "gold" }} />
                    <Typography
                      onClick={() => {
                        toggleDrawer(true);
                      }}
                      sx={{ cursor: "pointer" }}
                    >
                      4,75 (5 ocen)
                    </Typography>
                  </Stack>
                  <img
                    src={
                      product.imageUrl
                        ? product.imageUrl
                        : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                    }
                    alt={product.title}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Stack>
              </Card>
            </Grid>

            <Grid size={4}>
              <ProductDetailsAndPurchasePanel
                creationDate={product.creationDate}
                creatorUserId={product.creatorUserId}
                price={product.price}
                description={product.description}
              />
            </Grid>

            <ProductReviewSummary toggleDrawer={toggleDrawer} />
          </>
        )}
      </Grid>
    </>
  );
}
