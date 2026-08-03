// useBookingDates.js — now just validation logic, no state of its own
import { toast } from "react-toastify";

export function useBookingDates(checkIn, checkOut, setField) {
  const handleCheckIn = (date) => {
    if (checkOut && date >= checkOut) {
      toast.error("Check-in must be before Check-out.");
      return;
    }
    setField("checkIn", date);
  };

  const handleCheckOut = (date) => {
    if (checkIn && date <= checkIn) {
      toast.error("Check-out must be after Check-in.");
      return;
    }
    setField("checkOut", date);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return { tomorrow, handleCheckIn, handleCheckOut };
}