import { debounce } from "@/shared/utils/functions";
import { Search } from "@mui/icons-material";
import { Box, Button, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import Router from "next/router";

export default function SearchField() {
  const [term, setTerm] = useState<string>("");

  const delayedSearch = debounce((searchTerm) => {
    console.log("Searching for:", searchTerm);
  }, 500);

  const handleSearch = (e: any) => {
    e.preventDefault();

    Router.push(
      {
        pathname: "/products",
        query: {
          search: term,
        },
      },
      undefined,
      {
        shallow: false,
      }
    );
  };

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
      onSubmit={handleSearch}
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
        defaultValue=""
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => {
          setTerm(e.target.value);
          delayedSearch(e.target.value);
        }}
      />

      <Button
        disableElevation
        variant="contained"
        sx={{ height: "100%", borderRadius: 0, width: 130 }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Paper>
  );
}
