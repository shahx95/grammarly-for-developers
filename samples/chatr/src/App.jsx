import "./App.css";
import Grid from "@mui/material/Grid";
import { Inbox } from "./components/Inbox";
import { ChatList } from "./components/ChatList";
import { CustomerInfo } from "./components/CustomerInfo";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Grid container>
      <Grid
        item
        xs={3}
        lg={2}
        sx={{
          height: "100vh",
          overflow: "auto",
          boxShadow: "0 0 16px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <Inbox />
      </Grid>
      <Grid item xs={6} lg={7} sx={{ height: "100vh", overflow: "auto" }}>
        <ChatList activeUserId="1" />
      </Grid>
      <Grid item xs={3} lg={3} sx={{ height: "100vh", overflow: "auto" }}>
        <CustomerInfo />
      </Grid>
    </Grid>
  );
}

export default App;
