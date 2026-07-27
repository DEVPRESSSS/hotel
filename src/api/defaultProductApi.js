import { apiFetch } from "./apiClient";

export function getProducts() {
    return apiFetch("products");
}

export function getRoomByRoomTypeId(id) {
    return apiFetch(`products/${id}`);
}

