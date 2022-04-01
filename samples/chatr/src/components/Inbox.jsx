import Box from "@mui/material/Box";
import { Avatar } from "./Avatar";
import { ChatService } from "../services/ChatService";
import "./Inbox.css";

const service = new ChatService();

function InboxItem({ user }) {
  return (
    <Box className="InboxItem">
      <Avatar name={user.name} />
      <Box sx={{ ml: 1 }}>{user.name}</Box>
    </Box>
  );
}

export function Inbox() {
  const people = service.getPeople().filter((u) => Boolean(u.id));
  return (
    <div className="Inbox">
      {people.map((user) => (
        <InboxItem user={user} key={user.id} />
      ))}
    </div>
  );
}
