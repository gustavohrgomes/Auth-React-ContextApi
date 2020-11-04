import React, { createContext, useEffect, useState, useContext } from 'react';
import * as api from '../services/api'
//import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  login(user: object): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  
  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, [])

  async function login(userData: object) {
    const response = await api.post('https://localhost:3000', userData);

    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    localStorage.setItem('@App:user', JSON.stringify(response.data.user));
    localStorage.setItem('@App:token', response.data.token);
  }

  async function logout() {
    await localStorage.clear()
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user , login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

