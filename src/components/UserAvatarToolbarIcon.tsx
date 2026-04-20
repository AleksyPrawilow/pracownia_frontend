import {
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
import { useState } from "react";

export function UserAvatarToolbarIcon() {
  const [accountSettingsOpen, setAccountSettingsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAccountSettingsOpen(!accountSettingsOpen);
    setAnchorEl(event.currentTarget);
  };
  const handleAvatarClose = () => {
    setAccountSettingsOpen(false);
  };

  return (
    <>
      <Tooltip title="Admin">
        <IconButton onClick={handleAvatarClick} size="small" sx={{ ml: 2 }}>
          <Avatar
            sx={{
              bgcolor: "white",
              color: "primary.main",
              fontSize: 36,
              width: 56,
              height: 56,
            }}
          >
            A
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={accountSettingsOpen}
        onClose={handleAvatarClose}
        onClick={handleAvatarClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleAvatarClose}>
          <Avatar sx={{ bgcolor: "primary.main" }}>A</Avatar> Moje konto
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleAvatarClose}>
          <ListItemIcon>
            <ShoppingCartIcon fontSize="small" />
          </ListItemIcon>
          Panel uzytkownika
        </MenuItem>
        <MenuItem onClick={handleAvatarClose}>
          <ListItemIcon>
            <ShoppingCartIcon fontSize="small" />
          </ListItemIcon>
          Koszyk
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleAvatarClose}>
          <ListItemIcon sx={{ color: "secondary.main" }}>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
