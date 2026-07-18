import { apiFetch } from "./apiClient";

export function getRoomTypes() {
    return apiFetch("room-types");
}

export function getRoomTypeId(id) {
    return apiFetch(`room-types/${id}`);
}

export function createRoomType(data) {
    return apiFetch("room-types", {
        method: "POST",
        body: data,
    });
}

export function updateRoomType(id, data) {
    return apiFetch(`room-types/${id}`, {
        method: "PUT",
        body: data,
    });
}

export function deleteRoomType(id) {
    return apiFetch(`room-types/${id}`, {
        method: "DELETE",
    });
}