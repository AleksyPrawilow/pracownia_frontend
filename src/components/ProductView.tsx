import {
  Card,
  Skeleton,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { useState } from "react";

interface Prop {
  id: string;
  creation_date: string;
  creator_user_id: string;
  description: string;
  title: string;
  image_url: string;
  price: number;
}

export function ProductView({
  id,
  creation_date,
  creatorUserId,
  description,
  title,
  image_url,
  price,
}: Prop) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Card
      sx={{
        boxShadow: 0,
        transition: "box-shadow 150ms ease, transform 150ms ease",
        "&:hover": {
          boxShadow: 2,
          transform: "translateY(1px)",
        },
      }}
    >
      <CardActionArea onClick={() => {}} disableRipple>
        <CardContent>
          <div style={{ position: "relative", height: 300 }}>
            {!loaded && (
              <Skeleton
                variant="rectangular"
                width="100%"
                height={300}
                sx={{ position: "absolute", top: 0, left: 0 }}
              />
            )}

            <img
              src={image_url}
              alt={title}
              onLoad={() => setLoaded(true)}
              style={{
                width: "100%",
                height: 300,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="caption" noWrap>
            {description}
          </Typography>
          <Typography variant="h4">{Number(price).toFixed(2)} zł</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
