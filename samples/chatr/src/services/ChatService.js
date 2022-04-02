const USERS = {
  1: { name: "David H", id: 1, avatarId: 60 },
  2: { name: "Rahul K", id: 2, avatarId: 67 },
  3: { name: "Jason S", id: 3, avatarId: 54 },
  4: { name: "Elise F", id: 4, avatarId: 37 },
};

const THREADS = {
  1: {
    messages: [
      {
        author: 1,
        body: "I don't have a strong feeling about how to describe our product launch!",
      },
      {
        author: 4,
        body: "I know just the site to help you get unstuck.",
      },
    ],
  },
  2: {
    messages: [
      {
        author: 4,
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
        author: 4,
        body: "Everything looks great, but are we sure we want to change the direction of our marking so dramatically?",
      },
      {
        author: 4,
        body: "Our customers are ready for something new, but I understand this is a big change, let's get a meeting with Rob to see if there is any new feedback from our beta users.",
      },
    ],
  },
};

export class ChatService {
  getAllUsers() {
    return Object.values(USERS);
  }

  getUser(id) {
    return USERS[id];
  }

  getAllThreads() {
    return Object.values(THREADS);
  }

  /**
   * Get messages in thread with provided id
   */
  getMessages(userId) {
    if (THREADS[userId]) {
      return THREADS[userId].messages;
    }

    throw new Error("person not found");
  }

  sendMessage(from, to, message) {
    if (to in THREADS) {
      THREADS[to].messages.push({ author: from, body: message });
    } else {
      throw new Error("chat not found");
    }
  }
}
