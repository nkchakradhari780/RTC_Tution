"use client";

import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin';
}

interface AuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const mockUsers = [
  {
    id: '1',
    email: 'admin@gmail.com',
    password: 'admin@1234',
    name: 'Admin User',
    role: 'admin' as const
  },
  {
    id: '2',
    email: 'student@gmail.com',
    password: 'student@1234',
    name: 'Student User',
    role: 'student' as const
  }
];

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  login: async (email: string, password: string) => {
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
      const { password: _, ...userData } = user;
      set({ user: userData });
      return true;
    }
    return false;
  },
  logout: () => set({ user: null })
}));