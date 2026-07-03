import { apiFetch } from "./apiClient";

//Generic delete function
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

export async function handleUpsert(id, payload) {
    
    try {
        if (!id) {
            await apiFetch("rooms", { method: 'POST', body: payload });
        } else {
            await apiFetch(`rooms/${id}`, { method: 'PUT', body: payload });
        }
        return true;
    } catch (err) {
        alert(err.message);
        return false;
    }
}