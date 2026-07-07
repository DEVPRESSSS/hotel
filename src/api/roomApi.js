import { apiFetch } from "./apiClient";

export function getRooms() {
    return apiFetch("rooms");
}

export function getRoomById(id) {
    return apiFetch(`rooms/${id}`);
}

export function createRoom(data) {
    return apiFetch("rooms", {
        method: "POST",
        body: data,
    });
}

export function updateRoom(id, data) {
    return apiFetch(`rooms/${id}`, {
        method: "PUT",
        body: data,
    });
}

export function deleteRoom(id) {
    return apiFetch(`rooms/${id}`, {
        method: "DELETE",
    });
}