import { apiFetch } from "./apiClient";

export function confirmBooking(data) {
    return apiFetch("products/confirm-booking", {
        method: "POST",
        body:data,
    });
}