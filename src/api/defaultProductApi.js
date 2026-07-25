import { apiFetch } from "./apiClient";

export function getProducts() {
    return apiFetch("products");
}

export function getProductId(id) {
    return apiFetch(`products/${id}`);
}

