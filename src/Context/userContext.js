import { useState } from 'react';
import { createContext } from 'react';
import mockUsers from '../users.json';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsers);

  return <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };