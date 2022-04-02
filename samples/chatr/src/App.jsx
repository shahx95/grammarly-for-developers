import React from "react";

import { Grid } from "@mui/material";
import { AppProvider } from "./AppContext";
import { Inbox } from "./components/Inbox";
import { ChatList } from "./components/ChatList";
import { CustomerInfo } from "./components/CustomerInfo";

import "./App.css";

function App() {
  return (
    <AppProvider>
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
          <ChatList />
        </Grid>
        <Grid item xs={3} lg={3} sx={{ height: "100vh", overflow: "auto" }}>
          <CustomerInfo />
        </Grid>
      </Grid>
    </AppProvider>
  );
}

export default App;
