import { apiFetch } from "./apiClient";
export async function fetchRooms() {
   return(
      apiFetch("rooms")
   )
}
export async function DeleteRoom(id){
   return (
      apiFetch(`rooms/${id}`)
   )
}