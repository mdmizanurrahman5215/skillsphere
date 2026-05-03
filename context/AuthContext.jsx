"use client";

import React, { createContext, useContext } from "react";
import { signIn, signUp, useSession, authClient } from "@/lib/auth-client";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { data: session, isLoading } = useSession();
  const user = session?.user || null;
  const isLoggedIn = true;

  // Login with Better Auth
  const login = async ({ email, password }) => {
    return signIn({ email, password });
  };

  // Register with Better Auth
  const register = async ({ name, email, password }) => {
    return signUp({ name, email, password });
  };

  // Logout
  const logout = async () => {
    await authClient.signOut();
  };

  // Update user profile (calls Better Auth API)
  const updateProfile = async (updatedData) => {
    // PATCH /api/auth/user or similar endpoint (Better Auth exposes user update)
    return authClient.updateUser(updatedData);
  };

  const value = {
    user,
    isLoggedIn,
    loading: isLoading,
    login,
    register,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
