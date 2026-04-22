import { Stack, Rating, Typography, Divider } from "@mui/material";

interface Prop {
  id: string;
  creationDate: string;
  userId: string;
  review: string;
  rating: number;
  productId: string;
  deleteReview: (reviewId: string, productId: string) => void;
}

export function CommentView({
  id,
  creationDate,
  userId,
  review,
  rating,
  productId,
  deleteReview,
}: Prop) {
  return (
    <>
      <Stack
        spacing={1}
        direction="column"
        sx={{
          justifyContent: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ paddingTop: 2, alignItems: "center" }}
        >
          <Rating
            value={rating}
            readOnly
            size="medium"
            sx={{ color: "gold" }}
          />
          <Typography variant="caption" sx={{ fontWeight: 300 }}>
            {new Date(creationDate).toLocaleString("pl-PL")} | zakup od {userId}
          </Typography>
        </Stack>
        <Typography variant="body1">{review}</Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "end" }}
        >
          <Typography
            variant="caption"
            sx={{ cursor: "pointer", fontWeight: 300, color: "primary.main" }}
          >
            Edytuj
          </Typography>
          <Typography
            variant="caption"
            onClick={() => {
              deleteReview(id, productId);
            }}
            sx={{ cursor: "pointer", fontWeight: 300, color: "red" }}
          >
            Usuń
          </Typography>
        </Stack>

        <Divider sx={{ paddingTop: 1 }} />
      </Stack>
    </>
  );
}
