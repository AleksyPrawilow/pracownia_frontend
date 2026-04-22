import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import NumberSpinner from "./NumberSpinner";

interface Prop {
  creationDate: string;
  creatorUserId: string;
  price: number;
  description: string;
}

export function ProductDetailsAndPurchasePanel({
  creationDate,
  creatorUserId,
  price,
  description,
}: Prop) {
  const [whole, partial] = Number(price).toFixed(2).toString().split(".");

  return (
    <>
      <Stack spacing={2}>
        <Card
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Stack direction="column" sx={{ p: 2, width: "100%" }}>
            <Typography variant="h5">
              Od{" "}
              {creatorUserId === null ? "nieznany uzytkownik" : creatorUserId}
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 300 }}>
              Osoba fizyczna
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 300 }}>
              Dodano {new Date(creationDate).toLocaleString("pl-PL")}
            </Typography>
            <Box sx={{ height: 16 }} />
            <Divider />
            <Box sx={{ height: 16 }} />
            <Stack direction="row" sx={{ alignItems: "end" }}>
              <Typography variant="h4" sx={{ fontWeight: 1000 }}>
                {whole},
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 1000 }}>
                {partial} zł
              </Typography>
            </Stack>
            <Box sx={{ height: 16 }} />
            <Divider />
            <Box sx={{ height: 16 }} />
            <Box>
              <NumberSpinner
                label="Liczba sztuk"
                min={1}
                max={50}
                defaultValue={1}
                size="small"
              />
            </Box>
            <Box sx={{ height: 16 }} />
            <Button
              variant="contained"
              disableRipple
              disableElevation
              size="large"
              sx={{ fontWeight: 700 }}
            >
              DODAJ DO KOSZYKA
            </Button>
          </Stack>
        </Card>

        <Card
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Stack direction="column" sx={{ p: 2, width: "100%" }}>
            <Typography variant="h5">Opis produktu</Typography>
            <Box sx={{ height: 16 }} />
            <Typography variant="body1">{description}</Typography>
          </Stack>
        </Card>
      </Stack>
    </>
  );
}
