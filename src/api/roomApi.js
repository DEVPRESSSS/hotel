import { apiFetch } from "./apiClient";

//roomApi.js
export async function fetchRooms() {
   return(
    apiFetch("rooms")
   )
}