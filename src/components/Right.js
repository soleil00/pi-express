import { Laptop, PhoneAndroid, PhoneIphone } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function Right() {
  return (
    <Box
      flex={2}
      p={2}
      height={"100vh"}
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
        paddingTop: "80px",
      }}
      bgcolor={"palegoldenrod"}
    >
      <Box sx={{ height: "100vh", overflowY: "scroll" }}>
        <Typography>Reported devices</Typography>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <PhoneIphone />
              </ListItemIcon>
              <ListItemText primary="SAM G9" secondary="IMEI 123434342" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <PhoneAndroid />
              </ListItemIcon>
              <ListItemText primary="SAM G9" secondary="IMEI 123434342" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Laptop />
              </ListItemIcon>
              <ListItemText primary="Asus" secondary="IMEI 123434342" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <PhoneAndroid />
              </ListItemIcon>
              <ListItemText primary="SAM G9" secondary="IMEI 123434342" />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Box>
  );
}

export default Right;
