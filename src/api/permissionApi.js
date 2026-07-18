import { apiFetch } from "./apiClient";

export function getPermissions() {
    return apiFetch("permissions");
}

export function getPermissionById(id) {
    return apiFetch(`permissions/${id}`);
}

export function createPermission(data) {
    return apiFetch("permissions", {
        method: "POST",
        body: data,
    });
}

export function updatePermission(id, data) {
    return apiFetch(`permissions/${id}`, {
        method: "PUT",
        body: data,
    });
}

export function deletePermission(id) {
    return apiFetch(`permissions/${id}`, {
        method: "DELETE",
    });
}