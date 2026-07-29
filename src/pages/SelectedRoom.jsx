import { TextInput } from "../components/Forms/TextInput";
import HotelImage1 from "../assets/HotelIntro.png";
import { useParams } from "react-router-dom";
import { useViewSelectedRoom } from "../hooks/useDefaultProduct";
import { LabelStyle } from "../components/Forms/LabelStyle";
import DatePicker from "../components/DateTimePicker/DateTimePickerInput";
import { useBookingDates } from "../hooks/useBookingDate";

export function SelectedRoomPage() {

    //Get the id of the room
    const { id } = useParams();

    const{checkIn, tommorow, checkOut, handleCheckIn, handleCheckOut} = useBookingDates();
 
    //Pass the Id in the hook
    const { selectedRoom: room } = useViewSelectedRoom(id);
    if (!room) return null;
    if (!id) return;

   

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 rounded-xl border border-gray-100 shadow-sm p-4 md:p-8">

                    {/* Image carousel */}
                    <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-gray-100">
                        <img
                            src={HotelImage1}
                            alt="Room 001"
                            className="w-full h-full object-cover"
                        />
                        {/* Prev / Next controls */}
                        <button
                            type="button"
                            aria-label="Previous image"
                            className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-white/90 shadow hover:bg-white transition"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            aria-label="Next image"
                            className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-white/90 shadow hover:bg-white transition"
                        >
                            ›
                        </button>
                        {/* Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {[0, 1, 2, 3].map((i) => (
                                <span
                                    key={i}
                                    className={`h-1.5 w-1.5 rounded-full ${
                                        i === 0 ? "bg-white" : "bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Room info + request form */}
                    <div className="flex flex-col">

                        <div className="flex items-start justify-between gap-4">
                            <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl mt-1">
                                {room.roomNumber}
                            </h1>

                            <div className="text-right shrink-0">
                                <span className="font-semibold text-gray-800 text-2xl md:text-3xl">
                                    {room.pricePerNigth}
                                </span>
                                <span className="text-gray-400 text-sm ml-1">/ night</span>
                            </div>
                        </div>

                        <p className="text-gray-500 mt-3 leading-relaxed">
                            Deluxe king room with city view, 32 sqm, sleeps 2 guests.
                        </p>

                        <dl className="grid grid-cols-3 gap-4 mt-6 pb-6 border-b border-gray-100">
                            <div>
                                <dt className="text-xs text-gray-400 uppercase tracking-wide">Size</dt>
                                <dd className="text-gray-700 font-medium mt-0.5">32 m²</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-gray-400 uppercase tracking-wide">Guests</dt>
                                <dd className="text-gray-700 font-medium mt-0.5">{room.capacity}</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-gray-400 uppercase tracking-wide">Bed</dt>
                                <dd className="text-gray-700 font-medium mt-0.5">{room.roomName}</dd>
                            </div>
                        </dl>

                        <form className="mt-6 flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <DatePicker
                                    label="Check-in"
                                    disabled={{ before: new Date() }}
                                    value={checkIn}
                                    onChange={handleCheckIn}
                                />
                                <DatePicker
                                    label="Check-out"
                                    disabled={{ before: tommorow }}
                                    value={checkOut}
                                    onChange={handleCheckOut}
                                />
                            </div>

                            <div>
                                <LabelStyle name="2nd guest fullname" />
                                <TextInput />
                            </div>

                            <LabelStyle name="Special request" />
                            <TextInput
                                label="Message"
                                name="message"
                                placeholder="Any special requests?"
                            />

                            <button
                                type="submit"
                                className="mt-2 inline-flex items-center justify-center rounded-lg bg-teal-900 text-white font-medium px-5 py-2.5 hover:bg-gray-800 transition"
                            >
                                Book Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}