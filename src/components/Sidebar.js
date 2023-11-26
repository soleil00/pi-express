import {
  Add,
  AppRegistration,
  DesktopMac,
  Home,
  Laptop,
  Phone,
  PhoneAndroid,
  PhoneIphone,
  Tv,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

function Sidebar() {
  return (
    <Box
      flex={1.2}
      height={"100vh"}
      sx={{
        display: { xs: "none", sm: "block" },
        paddingTop: "50px",
      }}
      bgcolor={"palegoldenrod"}
    >
      <Box position={"fixed"} ml={0} pl={0}>
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
    </Box>
  );
}

export default Sidebar;
