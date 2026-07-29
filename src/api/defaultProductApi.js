import { apiFetch } from "./apiClient";

export function getProducts() {
    return apiFetch("products");
}

export function getRoomByRoomTypeId(id) {
    return apiFetch(`products/${id}`);
}
export function getChosenRoomById(id){
     return apiFetch(`products/selected-room/${id}`)
}

