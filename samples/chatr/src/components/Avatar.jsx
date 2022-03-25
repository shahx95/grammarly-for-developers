import { default as MAvatar } from "@mui/material/Avatar";

export function Avatar({ name }) {
  return <MAvatar alt={name} src={`https://i.pravatar.cc/150?u=${name}`} />;
}
