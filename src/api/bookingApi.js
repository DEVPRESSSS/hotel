import { generatIdempotentKey } from "../utils/idempotentKeyGenerator";
import api from "./apiClient";

export async function confirmBooking(data) {
    const idempotentkey = await generatIdempotentKey();
    return api.post("bookings/confirm-booking",
        data,{
            headers:{
                "Idempotency-Key": idempotentkey
            }
    });
}