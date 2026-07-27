
import { apiFetch } from "./apiClient";

export function getRoomAmenities() {
    return apiFetch("roomamenity");
}

export function getRoomAmenityById(id) {
    return apiFetch(`roomamenity/${id}`);
}

export function createRoomAmenity(data) {
    return apiFetch("roomamenity", {
        method: "POST",
        body: data,
    });
}

export function updateRoomAmenity(id, data) {
    return apiFetch(`roomamenity/${id}`, {
        method: "PUT",
        body: data,
    });
}

export function deleteRoomAmenity(id) {
    return apiFetch(`roomamenity/${id}`, {
        method: "DELETE",
    });
}