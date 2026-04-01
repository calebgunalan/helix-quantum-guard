import { create } from 'zustand';
import { Role, Identity, getUserByRole } from '@/data/mockData';

interface AuthState {
  currentRole: Role;
  currentUser: Identity;
  isAuthenticated: boolean;
  setRole: (role: Role) => void;
  login: (role: Role) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  currentRole: 'patient',
  currentUser: getUserByRole('patient'),
  isAuthenticated: false,
  setRole: (role) => set({ currentRole: role, currentUser: getUserByRole(role) }),
  login: (role) => set({ currentRole: role, currentUser: getUserByRole(role), isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false, currentRole: 'patient', currentUser: getUserByRole('patient') }),
}));
