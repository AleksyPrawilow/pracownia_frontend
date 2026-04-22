import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  LinearProgress,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckMark from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";
import { CommentView } from "./CommentView";
import { AddReviewModal } from "./AddReviewModal";
import { useProductReviews } from "../hooks/UseProductReviews";
import type { Review } from "../types/Review";

interface Prop {
  title: string;
  imageUrl: string;
  open: boolean;
  id: string;
  toggleDrawer: (value: boolean) => void;
}

export function ProductReviewsDrawer({
  title,
  imageUrl,
  open,
  id,
  toggleDrawer,
}: Prop) {
  const [addReviewOpened, setAddReviewOpened] = useState(false);
  const { reviews, loading, error, addReview, fetchReviews, deleteReview } =
    useProductReviews();

  const toggleModal = (value: boolean) => {
    setAddReviewOpened(value);
  };

  const drawerWidth = {
    xs: "75%",
    sm: "50%",
    md: "34%",
  };

  useEffect(() => {
    fetchReviews(id);
  }, [id]);

  return (
    <>
      <AddReviewModal
        title={title}
        imageUrl={imageUrl}
        id={id}
        open={addReviewOpened}
        toggleModal={toggleModal}
        addReview={addReview}
      />
      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={() => {
          toggleDrawer(false);
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Stack direction="column" sx={{ width: "100%", p: 2 }}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h5">Opinie o produkcie</Typography>
            <IconButton
              onClick={() => {
                toggleDrawer(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ paddingTop: 2 }} />

          <Grid
            container
            spacing={2}
            sx={{ alignItems: "center", paddingTop: 2 }}
          >
            <Grid size={3}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Stack spacing={0.5} direction="column" sx={{ width: "100%" }}>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "center", fontWeight: 700 }}
                  >
                    Rewelacyjny
                  </Typography>
                  <Stack
                    direction="row"
                    sx={{ width: "100%", justifyContent: "center" }}
                  >
                    <StarIcon sx={{ fontSize: 28, color: "gold" }} />
                    <Typography variant="h5">4,75</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    5 ocen
                  </Typography>
                </Stack>
                <Divider orientation="vertical" flexItem />
              </Stack>
            </Grid>
            <Grid size={8}>
              <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
                <Typography variant="body2">5</Typography>
                <Rating value={5} readOnly sx={{ color: "gold" }} />
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={50}
                  sx={{ width: "100%" }}
                />
              </Stack>
              <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
                <Typography variant="body2">4</Typography>
                <Rating value={4} readOnly sx={{ color: "gold" }} />
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={25}
                  sx={{ width: "100%" }}
                />
              </Stack>
              <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
                <Typography variant="body2">3</Typography>
                <Rating value={3} readOnly sx={{ color: "gold" }} />
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={17}
                  sx={{ width: "100%" }}
                />
              </Stack>
              <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
                <Typography variant="body2">2</Typography>
                <Rating value={2} readOnly sx={{ color: "gold" }} />
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={10}
                  sx={{ width: "100%" }}
                />
              </Stack>
              <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
                <Typography variant="body2">1</Typography>
                <Rating value={1} readOnly sx={{ color: "gold" }} />
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={5}
                  sx={{ width: "100%" }}
                />
              </Stack>
            </Grid>
          </Grid>

          <Stack
            spacing={1}
            direction="row"
            sx={{ alignItems: "center", paddingTop: 2 }}
          >
            <CheckMark
              sx={{
                fontSize: 28,
                color: "green",
              }}
            />
            <Typography variant="caption" sx={{ fontWeight: 300 }}>
              Wszystkie opinie są potwierdzone zakupem
            </Typography>
          </Stack>
          <Box sx={{ paddingTop: 2 }} />
          <Button
            variant="contained"
            disableRipple
            disableElevation
            size="large"
            onClick={() => {
              toggleModal(true);
            }}
            sx={{ fontWeight: 700 }}
          >
            PODZIEL SIĘ SWOJA OPINIA
          </Button>

          {!loading && error === null && reviews && (
            <>
              {reviews.content.map((review: Review) => {
                return (
                  <CommentView
                    id={review.id}
                    creationDate={review.creationDate}
                    userId={review.creatorUserId}
                    review={review.description}
                    rating={review.rate}
                    productId={review.product.id}
                    deleteReview={deleteReview}
                    key={review.id}
                  />
                );
              })}
            </>
          )}
        </Stack>
      </Drawer>
    </>
  );
}
