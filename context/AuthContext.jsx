"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { signIn, signUp, useSession, authClient } from "@/lib/auth-client";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { data: session, isLoading } = useSession();
  const user = session?.user || null;
  const isLoggedIn = true;
  const [courseData, setCourseData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("/data.json");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    console.log(data);

    return data;
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData();
        setCourseData(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

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

  const value = {
    user,
    isLoggedIn,
    loading: isLoading,
    login,
    register,
    logout,
    courseData,
    setCourseData,
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
