import { Box, Divider, Grid, Stack } from "@mui/material";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Right from "../components/Right";

function HomeRoute() {
  return (
    <Box>
      <NavBar />
      <Stack direction={"row"} justifyContent={"space-between"} spacing={2}>
        {/* <Sidebar /> */}
        <Feed />
        {/* <Right /> */}
      </Stack>
    </Box>
  );
}

export default HomeRoute;
