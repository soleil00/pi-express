import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  ThemeProvider,
  Typography,
  colors,
  createTheme,
} from "@mui/material";
import React from "react";
import Post from "./Post";
import { SurfingSharp } from "@mui/icons-material";
import MuiSnackBar, { Snackbar } from "../MuiSnackBar";
import { MuiDialog } from "../MuiDialog";
import { MuiTabs } from "../MuiTabs";
import { MuiLoadingButton } from "../MuiLoadingButton";
import { MuiDatePicker } from "../MuiDatePicker";
import { MuiTimeline } from "../MuiTimeline";
import { MuiToggleButton } from "../MuiToggleButton";

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.lightGreen[500],
    },
  },
});

function Feed() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        flex={4}
        p={2}
        height={"100vh"}
        width={"100%"}
        paddingTop={"80px"}
        marginBottom={"30px"}
        sx={{ overflowY: "auto" }}
        justifyContent={"center"}
        // bgcolor={"palegoldenrod"}
      >
        {/* <Post />
      <Stack spacing={1}>
        <Alert severity="info">this is info alert</Alert>
        <Alert severity="error">this is error alert</Alert>
        <Alert severity="success">this is success alert</Alert>
        <Alert severity="warning">this warning alert</Alert>
      </Stack>
      <Stack spacing={1}>
        <Alert
          variant="filled"
          severity="info"
          action={<Button color="inherit">action</Button>}
        >
          <AlertTitle>this is info title</AlertTitle>
          this is info alert
        </Alert>
        <Alert
          variant="filled"
          severity="error"
          action={<Button color="inherit">action</Button>}
        >
          <AlertTitle>this is error title</AlertTitle>
          this is error alert
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          action={<Button color="inherit">action</Button>}
        >
          <AlertTitle>this is success title</AlertTitle>
          this is success alert
        </Alert>
        <Alert
          variant="filled"
          severity="warning"
          action={<Button color="inherit">action</Button>}
        >
          <AlertTitle>this is warning title</AlertTitle>
          this warning alert
        </Alert>
      </Stack> */}
        <MuiSnackBar />
        <MuiDialog />
        <MuiTabs />
        <MuiLoadingButton />
        <MuiDatePicker />
        <MuiTimeline />
        <MuiToggleButton />
      </Box>
    </ThemeProvider>
  );
}

export default Feed;
