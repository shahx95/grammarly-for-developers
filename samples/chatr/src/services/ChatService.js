const PEOPLE = {
  1: { name: "David H" },
  2: { name: "Rahul K" },
  3: { name: "Jason S" },
};
const CHATS = {
  1: {
    messages: [
      {
        author: 1,
        body: "I don't have a strong feeling about how to describe our product launch!",
      },
      {
        author: 2,
        body: "I know just the site to help you get unstuck.",
      },
    ],
  },
};

export class ChatService {
  getPeople() {
    Object.entries(PEOPLE).map(([id, person]) => ({
      id,
      ...person,
    }));
  }

  getMessages(personId) {
    if (personId in PEOPLE) {
      return {
        customerInfo: PEOPLE[personId],
        history: CHATS[personId],
      };
    } else {
      throw new Error("person not found");
    }
  }

  sendMessage(from, to, message) {
    if (to in CHATS) {
      CHATS[to].messages.push({ author: from, body: message });
    } else {
      throw new Error("chat not found");
    }
  }
}
