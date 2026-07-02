//roomApi.js
import { apiFetch } from "./apiClient";
export async function fetchUser() {
   return apiFetch('users')
}