import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  Rating,
  Snackbar,
  Stack,
  TextField,
  Typography,
  type SnackbarCloseReason,
} from "@mui/material";
import { useState } from "react";
import type { Review } from "../types/Review";

interface Prop {
  title: string;
  imageUrl: string;
  id: string;
  open: boolean;
  toggleModal: (value: boolean) => void;
  addReview: (
    review: Review,
    onSuccess: () => void,
    onError: () => void,
  ) => void;
}

export function AddReviewModal({
  title,
  imageUrl,
  id,
  open,
  toggleModal,
  addReview,
}: Prop) {
  const [snackOpen, setSnackOpen] = useState(false);
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");
  const maxReviewLength = 300;

  const handleSnackClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  const tryAddingReview = () => {
    if (rate == 0) {
      setSnackOpen(true);
      return;
    }
    addReview(
      {
        creatorUserId: crypto.randomUUID(),
        id: "",
        product: { id: id },
        description: review,
        rate: rate,
        creationDate: "",
      },
      () => {
        // success
        toggleModal(false);
      },
      () => {
        // error
        toggleModal(false);
      },
    );
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackOpen}
        autoHideDuration={2000}
        onClose={handleSnackClose}
      >
        <Alert
          severity="error"
          variant="filled"
          onClick={handleSnackClose}
          sx={{ width: "100%" }}
        >
          Nalezy wybrać ocenę!
        </Alert>
      </Snackbar>

      <Dialog open={open} onClose={() => toggleModal(false)}>
        <DialogTitle sx={{ m: 0, p: 2 }}>Ocena produktowa</DialogTitle>
        <Divider />
        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid size={3}>
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              }
              alt={title}
              style={{
                width: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Grid>
          <Grid size={9}>
            <Stack direction="column">
              <Typography variant="h5">{title}</Typography>
              <Typography variant="caption" sx={{ fontWeight: 300 }}>
                {id}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 2,
          }}
        >
          <Rating
            size="large"
            value={rate}
            onChange={(_, newValue) => {
              setRate(newValue ? newValue : 0);
            }}
            sx={{ color: "gold" }}
          />
        </Box>
        <TextField
          value={review}
          onChange={(e) => {
            setReview(e.target.value);
          }}
          slotProps={{
            htmlInput: {
              maxLength: maxReviewLength,
            },
          }}
          multiline
          placeholder="Recenzja produktu"
          helperText={`${review.length}/${maxReviewLength}`}
          sx={{ p: 2 }}
          minRows={3}
          maxRows={5}
        />
        <Button
          variant="contained"
          disableRipple
          disableElevation
          size="large"
          onClick={() => {
            tryAddingReview();
          }}
          sx={{
            fontWeight: 700,
            marginLeft: 2,
            marginRight: 2,
            marginBottom: 2,
          }}
        >
          DODAJ OPINIĘ
        </Button>
      </Dialog>
    </>
  );
}
