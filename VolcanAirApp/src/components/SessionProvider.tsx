import React, { createContext, useState, useEffect } from 'react';
import { firebase } from '@react-native-firebase/auth';

interface User {
  displayName: string;
  email: string;
  // Agrega aquí cualquier otra propiedad que necesites del usuario
}

interface SessionContextProps {
  user: User | null;
}

const SessionContext = createContext<SessionContextProps>({ user: null });

export const SessionProvider: JSX.Element = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Usuario autenticado
        const { displayName, email } = user;
        setUser({ displayName, email });
      } else {
        // Usuario no autenticado
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <SessionContext.Provider value={{ user }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
