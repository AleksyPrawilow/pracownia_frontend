import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
import { UserAvatarToolbarIcon } from "./UserAvatarToolbarIcon";
import { ShopSearchBar } from "./ShopSearchBar";
import { useNavigate } from "react-router-dom";

export function ShopAppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ShoppingCartIcon sx={{ fontSize: 48, p: 1 }} />
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/products")}
            variant="h4"
            component="div"
          >
            NIE ALLEGRO
          </Typography>
          <ShopSearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <UserAvatarToolbarIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
