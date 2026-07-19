
import { apiFetch } from "./apiClient";

export function getRolePermissions() {
    return apiFetch("role-permissions");
}

export function getRolePermissionById(id) {
    return apiFetch(`role-permissions/${id}`);
}

export function createRolePermission(data) {
    return apiFetch("role-permissions", {
        method: "POST",
        body: data,
    });
}

export function updateRolePermission(id, data) {
    return apiFetch(`role-permissions/${id}`, {
        method: "PUT",
        body: data,
    });
}

export function deleteRolePermission(id) {
    return apiFetch(`role-permissions/${id}`, {
        method: "DELETE",
    });
}