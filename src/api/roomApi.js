
import api from "./apiClient";

export async function getRooms() {
    const { data } = await api.get("/rooms");
    return data;
}
export async function getRoomById(id) {
    const {data} = await api.get(`rooms/${id}`);
    return  data;
}

export async function createRoom(data) {
    const response =  api.post("/rooms", data);
    return response;
}

export async function updateRoom(id, data) {
    const response =  api.put(`rooms/${id}`,data);
    return response;
}

export function deleteRoom(id) {
    return api.delete(`rooms/${id}`);
}