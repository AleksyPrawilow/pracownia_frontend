import {
  Card,
  Stack,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
} from "@mui/material";

export function FiltersList() {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Stack direction="column" sx={{ p: 2, width: "100%" }}>
          <Typography variant="h5">Cena (zł)</Typography>
          <RadioGroup>
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Ponizej 50 zł"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="50 zł do 100 zł"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="100 zł do 150 zł"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="150 zł do 200 zł"
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label="Powyzej 200 zł"
            />
          </RadioGroup>

          <Box sx={{ height: 24 }} />

          <Typography variant="h5">Rabat</Typography>
          <RadioGroup>
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="5% lub więcej"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="10% lub więcej"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="15% lub więcej"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="20% lub więcej"
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label="35% lub więcej"
            />
          </RadioGroup>
        </Stack>
      </Card>
    </>
  );
}
