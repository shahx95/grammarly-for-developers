import { useChatService } from "../AppContext";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { Email, LocationOn, Person } from "@mui/icons-material";
import { Avatar } from "./Avatar";

function CustomerInfoDetail({ icon, name, value }) {
  return (
    <Stack direction="row" gap={1}>
      {icon}
      {name && (
        <Typography sx={{ color: "rgba(0,0,0,0.5)" }}>{name}</Typography>
      )}
      <Typography>{value}</Typography>
    </Stack>
  );
}

export function CustomerInfo() {
  const { user } = useChatService();

  return (
    <Box
      sx={{
        padding: 2,
        borderLeft: "1px solid rgba(0,0,0,0.05)",
        height: "100%",
      }}
    >
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar user={user} />}
          title={user.name}
          subheader={user.company ?? ""}
        />
        <CardContent>
          <Stack gap={1}>
            <CustomerInfoDetail icon={<Person />} value="Customer" />
            <CustomerInfoDetail icon={<LocationOn />} value={user.location} />
            {/* <CustomerInfoDetail
              icon={<AccountCircle />}
              name="User ID"
              value={user.id}
            /> */}
            {/* <CustomerInfoDetail
              icon={<Phone />}
              name="Phone"
              value={user.phone}
            /> */}
            <CustomerInfoDetail
              icon={<Email />}
              name="Email"
              value={user.email}
            />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
