import { useState } from "react";
import { toast } from "react-toastify";

export function useBookingDates(){

    const [checkIn, setCheckIn] = useState();
    const [checkOut, setCheckOut] = useState();

    const handleCheckIn = (date) => {
        if (checkOut && date >= checkOut) {
            toast.error("Check-in must be before Check-out.");
            return;
        }

        setCheckIn(date);
    };

    const handleCheckOut = (date) => {
        if (checkIn && date <= checkIn) {
            toast.error("Check-out must be after Check-in.");
            return;
        }

        setCheckOut(date);
    };

    const tommorow = new Date();
    tommorow.setDate(tommorow.getDate() + 1);

    return {
        checkIn,
        checkOut,
        tommorow,
        handleCheckIn,
        handleCheckOut
    }
}