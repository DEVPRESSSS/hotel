import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

// Heroicons - CalendarDaysIcon (outline)
function CalendarIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
        </svg>
    );
}

export default function DatePicker({ label, value, onChange, disabled }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={ref}>
            <label className="block mb-2 text-sm font-semibold">
                {label}
            </label>

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between rounded-lg border px-4 py-3 text-left shadow-sm hover:border-blue-500"
            >
                <span>{value ? value.toLocaleDateString() : ""}</span>
                <CalendarIcon className="h-5 w-5 text-gray-500" />
            </button>

            {open && (
                <div className="absolute left-0 z-50 mt-2 rounded-xl border bg-white p-4 shadow-xl">
                    <DayPicker
                        mode="single"
                        selected={value}
                        disabled = {disabled}
                        onSelect={(date) => {
                            onChange(date);
                            setOpen(false);
                        }}
                    />
                </div>
            )}
        </div>
    );
}