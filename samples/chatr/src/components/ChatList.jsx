import { useEffect, useState } from "react";
import {
  GrammarlyEditorPlugin,
  GrammarlyButton,
} from "@grammarly/editor-sdk-react";
import {
  Box,
  Button,
  Card,
  CardContent,
  colors,
  Container,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useChatService } from "../AppContext";
import { Avatar } from "./Avatar";

export function ChatList() {
  const [text, setText] = useState(
    "Send every email with confidance. When every detail count, Grammarly has your back."
  );
  const { service, user } = useChatService();
  const messages = service.getMessages(user.id);
  console.log({ user, messages });

  useEffect(() => {
    focusEditor();
    scrollToBottom();
  }, []);

  return (
    <Container id="ChatList">
      <Stack gap={4} sx={{ minHeight: "calc(100vh - 216px)" }}>
        <Box sx={{ flex: "1000 0 0px" }} />
        {messages.map((item, index) => (
          <ChatItem
            key={index}
            type={item.author === "0" ? "outgoing" : "incoming"}
            message={item.body}
            user={service.getUser(item.author)}
          />
        ))}
      </Stack>
      <Card sx={{ position: "sticky", bottom: 16, margin: "16px 0" }} raised>
        <CardContent>
          <form
            onSubmit={(event) => {
              sendMessage();
              event.preventDefault();
            }}
          >
            <Stack gap={2} sx={{ paddingTop: "16px" }}>
              <GrammarlyEditorPlugin
                clientId="client_CTeX6WkzcJyGSNPDBHcqik"
                config={{
                  showToneDetector: true,
                  documentDomain: "business",
                  documentDialect: "canadian",
                }}
              >
                <TextareaAutosize
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  minRows={4}
                  maxRows={10}
                  style={{
                    resize: "none",
                    border: "none",
                    outline: "none",
                    width: "100%",
                    font: "inherit",
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && event.metaKey) {
                      sendMessage();
                    }
                  }}
                />
              </GrammarlyEditorPlugin>
              <Stack
                direction="row"
                gap={2}
                justifyContent="flex-end"
                alignItems="center"
              >
                <GrammarlyButton />
                <Button
                  type="submit"
                  aria-label="send"
                  variant="contained"
                  disabled={text.trim() === ""}
                >
                  Send
                </Button>
              </Stack>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Container>
  );

  function sendMessage() {
    service.sendMessage("0", "1", text);
    setText("");
    focusEditor();
    scrollToBottom();
  }

  function focusEditor() {
    const editor = document.querySelector("textarea");

    editor.setSelectionRange(editor.value.length, editor.value.length);
    editor.focus();
  }

  function scrollToBottom() {
    const container = document.querySelector("#ChatList");

    container.scrollTo(0, container.scrollHeight);
  }
}

function ChatItem({ user, type, message }) {
  return (
    <Stack direction={type === "outgoing" ? "row-reverse" : "row"} gap={2}>
      <Avatar user={user} />
      <Stack>
        <Card elevation={0} sx={{ background: colors.grey[100] }}>
          <CardContent>{message}</CardContent>
        </Card>
        <Box>
          <Typography variant="caption" color={colors.grey[500]}>
            {"1m · Seen"}
          </Typography>
        </Box>
      </Stack>
      <Box sx={{ flex: "0 0 40px" }} />
    </Stack>
  );
}
