import {
  Button,
  TextareaAutosize,
  Card,
  Stack,
  CardContent,
} from "@mui/material";

export function ChatList() {
  return (
    <div className="ChatList">
      <Card>
        <CardContent>
          <Stack>
            <TextareaAutosize
              minRows={4}
              maxRows={10}
              style={{ resize: "none" }}
            />
            <Stack direction="row" mt={2} justifyContent="flex-end">
              <Button aria-label="send" variant="contained">
                Send
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
