import { default as MAvatar } from "@mui/material/Avatar";

export function Avatar({ user }) {
  return (
    <MAvatar
      alt={user.name}
      src={`https://i.pravatar.cc/150?img=${user.avatarId}`}
    />
  );
}
