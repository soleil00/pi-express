import { Avatar, Container, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const MuiTabs = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  });
  return (
    <>
      <Skeleton variant="circular" width={40} height={40} animation="wave" />

      {open ? (
        <Stack direction={"row"} alignItems={"center"} display={"flex"}>
          <Avatar>RS</Avatar>
          <Stack ml={1}>
            <Typography>rukundo</Typography>
            <Typography>soleil</Typography>
          </Stack>
        </Stack>
      ) : (
        <Stack direction={"row"} alignItems={"center"} display={"flex"}>
          <Avatar>
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          </Avatar>
          <Stack ml={1} width={"100%"}>
            <Typography>
              <Skeleton animation="wave" width={"100%"} />
            </Typography>
            <Typography>
              <Skeleton animation="wave" width={"100%"} />
            </Typography>
          </Stack>
        </Stack>
      )}
    </>
  );
};
