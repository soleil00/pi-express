import { ExpandMore, Person, SendAndArchiveSharp } from "@mui/icons-material";
import {
  Masonry,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Chip,
  Paper,
  Stack,
} from "@mui/material";
import React from "react";

const height = [23, 55, 56, 22, 78, 45, 89, 100, 45, 67];

export const MuiTimeline = () => (
  <Box>
    <Box width={300}>
      <Accordion elevation={1}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          soleill togglle
        </AccordionSummary>
        <AccordionDetails>
          {/* <Stack spacing={1} direction={"row"}> */}

          <Chip label="soleil chip" color="success" />
          <Chip
            label="soleil chip"
            avatar={<Avatar>RS</Avatar>}
            color="secondary"
          />
          <Chip
            label="soleil chip"
            color="info"
            onDelete={() => alert("deleted")}
          />
          <Chip label="soleil chip" icon={<Person />} color="warning" />
          <Chip label="soleil chip" color="error" />
          {/* </Stack> */}
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={1}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          soleill togglle
        </AccordionSummary>
        <AccordionDetails>
          <Chip
            label="soleil chip"
            avatar={<Avatar>RS</Avatar>}
            color="secondary"
          />
          <Chip label="soleil chip" icon={<Person />} color="warning" />
          <Chip label="soleil chip" sx={{ bgcolor: "secondary" }} />
          <Chip label="soleil chip" color="success" />
          <Chip label="soleil chip" color="error" />
        </AccordionDetails>
      </Accordion>
    </Box>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent>mainnet</TimelineOppositeContent>
        <TimelineSeparator color="secondary">
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>jun 1</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>enclosed mainnet</TimelineOppositeContent>
        <TimelineSeparator color="secondary">
          <TimelineDot color="secondary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>may 4</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>launch</TimelineOppositeContent>
        <TimelineSeparator color="secondary">
          <TimelineDot color="secondary" />
          {/* <TimelineConnector /> */}
        </TimelineSeparator>
        <TimelineContent>jmarch 3</TimelineContent>
      </TimelineItem>
    </Timeline>
    <Masonry columns={3}>
      {height.map((h) => (
        <Paper
          key={h}
          sx={{
            height: h * 2,
            width: h,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          label="s"
        >
          height={h}x2 width={h}
        </Paper>
      ))}
    </Masonry>
  </Box>
);
