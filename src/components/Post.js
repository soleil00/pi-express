import { MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

function Post() {
  return (
    <Card elevation={6} sx={{ marginBottom: 1 }}>
      <CardHeader
        avatar={<Avatar>RS</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title="some header title"
        subheader={Date.now()}
      />
      <CardMedia>
        <img src="" alt="soleil rukundo" height={120} />
      </CardMedia>
      <CardContent>
        <Typography variant="h6">soleil test</Typography>
        <Typography variant="body2">
          some random test from soleil 00 who is godd prhgramerhdsc sv sc
          sdhsdfs scvhsafvsds cdf
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Report stolen</Button>
        <Button size="small">mutation</Button>
      </CardActions>
    </Card>
  );
}

export default Post;
