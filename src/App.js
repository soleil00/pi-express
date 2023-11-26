import { Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import LoginRoute from "./routes/LoginRoute";
import SignUpRoute from "./routes/SignUpRoute";
import { Box } from "@mui/material";
// import { LocalizationProvider } from "@mui/lab";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/register" element={<SignUpRoute />} />
      </Routes>
    </Box>
  );
}

export default App;
