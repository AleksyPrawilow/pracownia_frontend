import {
  Grid,
  Card,
  Stack,
  Typography,
  Box,
  LinearProgress,
  Rating,
  Divider,
} from "@mui/material";
import ChevronRight from "@mui/icons-material/ChevronRight";
import CheckMark from "@mui/icons-material/Check";
import StarMultiple from "@mui/icons-material/AutoAwesome";
import StarIcon from "@mui/icons-material/Star";

interface Prop {
  toggleDrawer: (value: boolean) => void;
}

export function ProductReviewSummary({ toggleDrawer }: Prop) {
  return (
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
            <Stack
              direction="row"
              onClick={() => {
                toggleDrawer(true);
              }}
              sx={{ cursor: "pointer", justifyContent: "space-between" }}
            >
              <Typography variant="h5">Opinie o produkcie</Typography>
              <ChevronRight sx={{ fontSize: 36, color: "gray" }} />
            </Stack>
            <Box sx={{ height: 16 }} />

            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid size={4}>
                <Stack direction="column" sx={{ width: "100%" }}>
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
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    <Typography variant="body2">5</Typography>
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={50}
                      sx={{ width: "100%" }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    <Typography variant="body2">4</Typography>
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={25}
                      sx={{ width: "100%" }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    <Typography variant="body2">3</Typography>
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={17}
                      sx={{ width: "100%" }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    <Typography variant="body2">2</Typography>
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={10}
                      sx={{ width: "100%" }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    <Typography variant="body2">1</Typography>
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={5}
                      sx={{ width: "100%" }}
                    />
                  </Stack>
                </Stack>
              </Grid>

              <Grid size={8}>
                <Card variant="outlined" sx={{ p: 2 }}>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    <StarMultiple sx={{ color: "gray" }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 300 }}>
                      NAJBARDZIEJ POMOCNA
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Rating
                      readOnly
                      value={5}
                      size="small"
                      sx={{ color: "gold" }}
                    />
                  </Stack>
                  <Box sx={{ height: 8 }} />
                  <Typography variant="body1">
                    Niesamowity produkt! Zdecydowanie polecam!
                  </Typography>
                  <Box sx={{ height: 8 }} />
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="caption"
                      noWrap
                      sx={{ fontWeight: 300 }}
                    >
                      22 kwietnia 2026 | Aleksy Prawiłow
                    </Typography>
                    <Typography
                      variant="caption"
                      noWrap
                      onClick={() => {
                        toggleDrawer(true);
                      }}
                      sx={{
                        cursor: "pointer",
                        color: "teal",
                        textDecoration: "underline",
                      }}
                    >
                      Zobacz więcej
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            </Grid>

            <Box sx={{ height: 16 }} />
            <Divider />
            <Box sx={{ height: 16 }} />
            <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
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
          </Stack>
        </Card>
      </Grid>
    </>
  );
}
