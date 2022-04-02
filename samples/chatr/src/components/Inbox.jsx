import React from "react";

import {
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Avatar } from "./Avatar";
import { useChatService } from "../AppContext";

function InboxItem({ user, ...rest }) {
  return (
    <ListItemButton {...rest}>
      <ListItemAvatar>
        <Avatar name={user.name} />
      </ListItemAvatar>
      <ListItemText primary={user.name} />
    </ListItemButton>
  );
}

export function Inbox() {
  const { service, loggedInUser, selectUser } = useChatService();
  const users = service
    .getAllUsers()
    .filter((user) => user.id !== loggedInUser.id);

  return (
    <List component="nav">
      {users.map((user) => (
        <InboxItem
          user={user}
          key={user.id}
          onClick={() => {
            selectUser(user.id);
            console.log("test", user);
          }}
        />
      ))}
    </List>
  );
}
