import {
  Add,
  CatchingPokemon,
  Laptop,
  Mail,
  MenuOutlined,
  Notifications,
  Person,
  PhoneAndroid,
  PhoneIphone,
  SearchOutlined,
  Tv,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setdrawerOpen] = useState(false);
  return (
    <AppBar position="fixed" sx={{ width: "100vw" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <MenuOutlined
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={() => setdrawerOpen(true)}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {" "}
          NONO-X TECH
        </Typography>
        {
          <Stack
            sx={{
              display: { xs: "none", sm: "block", lg: "block" },
              width: "30%",
              backgroundColor: "white",
              padding: "5px",
            }}
            direction={"row"}
            alignItems={"center"}
          >
            <TextField
              size="small"
              label="Search phone"
              variant="standard"
              color="secondary"
            />
          </Stack>
        }
        <SearchOutlined
          color="red"
          sx={{ marginLeft: "auto", display: { xs: "block", sm: "none" } }}
        />
        {
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <Badge badgeContent={23} color="success">
              <Notifications color="secondary" />
            </Badge>
            <Badge badgeContent={2} color="success">
              <Mail color="secondary" />
            </Badge>
            <Avatar onClick={(e) => setOpen(e.currentTarget)}>
              <Person />
            </Avatar>
          </Stack>
        }
      </Toolbar>
      <Menu anchorEl={open} open={Boolean(open)} onClose={() => setOpen(false)}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setdrawerOpen(false)}
      >
        <Box width={"200px"}>
          <List
            sx={{
              height: "100vh",
              overflowY: "scroll",
              marginLeft: 0,
              paddingLeft: 0,
            }}
          >
            <ListItem>
              <ListItemButton>
                <ListItemIcon sx={{ marginRight: 0 }}>
                  <Tv />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Laptop />
                </ListItemIcon>
                <ListItemText primary="Laptop" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <PhoneAndroid />
                </ListItemIcon>
                <ListItemText primary="Smartphone" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem sx={{ marginTop: "auto" }}>
              <ListItemButton>
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText primary="Register Device" />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
