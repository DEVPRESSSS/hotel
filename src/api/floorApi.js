import { apiFetch } from "./apiClient";

export async function fetchFloor(){
    return apiFetch("floors")
}