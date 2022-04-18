import SpaIcon from "@mui/icons-material/Spa";
import {
  AppBar,
  Badge,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Avatar, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UseBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          Learn React
        </Typography>
        <SpaIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar onClick={()=>setOpen(true)} sx={{ height: 30, width: 30 }} alt="Remy Sharp" src="" />
        </Icons>
        <UseBox>
          <Avatar onClick={()=>setOpen(true)} sx={{ height: 30, width: 30 }} alt="Remy Sharp" src="" />
          <Typography variant="span">Sagar</Typography>
        </UseBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
