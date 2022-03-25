const PEOPLE = {
  0: { name: "You" },
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
        author: 0,
        body: "I know just the site to help you get unstuck.",
      },
    ],
  },
  2: {
    messages: [
      {
        author: 0,
        body: "Did you push the latest changes to our repo?",
      },
      {
        author: 2,
        body: "I'm about to, but I want some feedback before I push these into production, do you have a moment to chat?",
      },
    ],
  },
  3: {
    messages: [
      {
        author: 0,
        body: "Everything looks great, but are we sure we want to change the direction of our marking so dramatically?",
      },
      {
        author: 3,
        body: "Our customers are ready for something new, but I understand this is a big change, let's get a meeting with Rob to see if there is any new feedback from our beta users.",
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
