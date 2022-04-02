// @ts-check

/**
 * @typedef { import("./types/User").User } User
 */

import React from "react";
import { ChatService } from "./services/ChatService";

const service = new ChatService();
const users = service.getAllUsers();
const loggedInUser = service.getUser(4);

const AppContext = React.createContext({
  service: null,
  user: null,
  loggedInUser: null,
  selectedUser: () => {},
});

export function useChatService() {
  /** @type {{ service: any, loggedInUser: User, user: User, selectedUser: (id: number) => void }} */
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
}

export function AppProvider(props) {
  const [user, setUser] = React.useState(users.length ? users[0] : null);

  const value = {
    service,
    loggedInUser,
    user,
    selectUser: (/** @type {number} */ id) => {
      setUser(service.getUser(id));
    },
  };
  return <AppContext.Provider value={value} {...props} />;
}
