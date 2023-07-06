import React, { createContext, useEffect, useState, ReactNode } from 'react';
import auth from '@react-native-firebase/auth';

type User = {
  // Define la estructura de información del usuario que deseas almacenar
  // Puede incluir campos como nombre, correo electrónico, etc.
  // Por ejemplo:
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // Usuario autenticado
        const { displayName, email } = authUser;

        setUser({
          name: displayName || '',
          email: email || '',
        });
      } else {
        // Usuario no autenticado
        setUser(null);
      }
    });

    // Se debe limpiar el event listener al desmontar el componente
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
