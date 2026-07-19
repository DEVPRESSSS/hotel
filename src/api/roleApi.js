
import { apiFetch } from "./apiClient";

export function getRoles() {
    return apiFetch("roles");
}

export function getRoleById(id) {
    return apiFetch(`roles/${id}`);
}

export function createRole(data) {
    return apiFetch("roles", {
        method: "POST",
        body: data,
    });
}

export function updateRole(id, data) {
    return apiFetch(`roles/${id}`, {
        method: "PUT",
        body: data,
    });
}

export function deleteRole(id) {
    return apiFetch(`roles/${id}`, {
        method: "DELETE",
    });
}