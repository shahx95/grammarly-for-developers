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
    <div className="App">
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={4}>
          <Inbox />
        </Grid>
        <Grid item xs={4}>
          <ChatList />
        </Grid>
        <Grid item xs={4}>
          <CustomerInfo />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
