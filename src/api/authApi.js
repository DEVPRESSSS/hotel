import { apiFetch } from "./apiClient";

export async function login({ email, password }) {
  return await apiFetch("auth/login", {
    method: "POST",
    body: {
      email,
      password,
    },
  });
}