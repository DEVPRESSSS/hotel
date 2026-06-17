//roomApi.js
import { apiFetch } from "./apiClient";
export async function fetchPermissions() {
   return apiFetch('permissions')
    
}