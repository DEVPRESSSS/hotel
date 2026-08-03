// useConfirmBooking.js
import { useState } from "react";
import { confirmBooking } from "../api/bookingApi";
import { toast } from "react-toastify";

export function useConfirmBooking(roomId) {
  const [formData, setFormData] = useState({
    roomId,
    checkIn: null,
    checkOut: null,
    specialRequest: "",
  });

  // for normal inputs (event-based)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // for non-event values like Date objects from a date picker
  const setField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const data = await confirmBooking(formData);
      if (!data) {
        toast.error("Booking failed. Please try again.");
        return;
      }
      toast.success("Booking confirmed!");
    } catch (err) {
      toast.error(err.message ?? "Something went wrong.");
    }
  };

  return { formData, handleChange, setField, handleBooking };
}