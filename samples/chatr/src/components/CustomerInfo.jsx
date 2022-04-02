import { useChatService } from "../AppContext";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  AccountCircle,
  Email,
  LocationOn,
  Person,
  Phone,
} from "@mui/icons-material";
import { Avatar } from "./Avatar";

function CustomerInfoDetail({ icon, name, value }) {
  return (
    <Stack direction={"row"} gap={1}>
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
  // TODO: use user

  return (
    <Box
      className="CustomerInfo"
      sx={{
        padding: 2,
        borderLeft: "1px solid rgba(0,0,0,0.05)",
        height: "100%",
      }}
    >
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar user={user} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Rahul Kadyan"
          subheader="Acme Co"
        />
        <CardContent>
          <Stack gap={1}>
            <CustomerInfoDetail icon={<Person />} value="Customer" />
            <CustomerInfoDetail icon={<LocationOn />} value="Paris, France" />
            <CustomerInfoDetail
              icon={<AccountCircle />}
              name="User ID"
              value="11111111111"
            />
            <CustomerInfoDetail
              icon={<Phone />}
              name="Phone"
              value="+33 000 0000 00"
            />
            <CustomerInfoDetail
              icon={<Email />}
              name="Email"
              value="rahul@istheking.com"
            />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
