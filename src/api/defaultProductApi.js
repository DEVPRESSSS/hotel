import api from "./apiClient";

export async function getProducts() {
    const response = await api.get("/products");
    return response.data;
}

export function getRoomByRoomTypeId(id) {
    return api.get(`products/${id}`);
}
export function getChosenRoomById(id){
     return api.get(`products/selected-room/${id}`)
}

