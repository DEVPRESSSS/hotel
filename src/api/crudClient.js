import { apiFetch } from "./apiClient";

 export async function handleDelete(id) {
    try {
        await apiFetch(`rooms/${id}`, {
            method: "DELETE",
        });
        alert("Room deleted!");

    } catch (err) {
        alert(err.message);
    }
};