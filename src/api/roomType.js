import { apiFetch } from "./apiClient";

export async function fetchRoomType(){
    return apiFetch("room-types")
}