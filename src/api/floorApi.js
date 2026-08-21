import api from "./apiClient";

export async function fetchFloor(){
    return api.get("floors")
}