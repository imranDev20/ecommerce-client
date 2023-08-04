import { Search } from "@mui/icons-material";
import { Box, Button, InputBase, Paper } from "@mui/material";
import React from "react";

export default function SearchField() {
  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        // p: "2px 4px",
        display: "flex",
        alignItems: "center",
        border: "2px solid rgb(227, 233, 239)",
        borderRadius: 1200,
        height: "44px",
        overflow: "hidden",
        width: "50%",
        "&:focus-within": {
          border: "2px solid",
          borderColor: "primary.main",
        },
      }}
    >
      <Box
        sx={{
          p: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        aria-label="menu"
      >
        <Search sx={{ color: "text.secondary", fontSize: 20 }} />
      </Box>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search any product..."
        inputProps={{ "aria-label": "search google maps" }}
      />

      <Button
        disableElevation
        variant="contained"
        sx={{ height: "100%", borderRadius: 0, width: 130 }}
      >
        Search
      </Button>
    </Paper>
  );
}
