import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: process.env.BETTER_AUTH_URL || "https://skillsphere-irqd.vercel.app",
});

export const { signIn, signUp, signOut, useSession } = createAuthClient();

// Add updateUser for profile update
export async function updateUser(updatedData) {
  const res = await fetch("/api/auth/user", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Failed to update user");
  }
  return res.json();
}
