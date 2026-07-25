//import { useRooms } from "../hooks/useRooms";
import HotelImage1 from "../assets/HotelIntro.png";
import { useProducts } from "../hooks/useDefaultProduct";


export function ProductPage() {
  const { products } = useProducts();
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">

        {/* Section intro */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our popular rooms
          </h2>
          <p className="mt-3 text-gray-500">
            Everything you need for a comfortable, memorable stay.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ roomId, roomName, pricePerNigth}) => (
            <div
              key={roomId}
              className="rounded-2xl border-t-4 border-teal-700 shadow-sm overflow-hidden
                         hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={HotelImage1}
                alt={`hotel room`}
                className="w-full h-56 object-cover"
              />

              <div className="px-5 pt-4 pb-3">
                <h3 className="font-semibold text-lg text-gray-900">{roomName}</h3>
                <p className="mt-1 text-teal-800 text-2xl font-bold">
                  ${pricePerNigth}
                  <span className="text-sm font-medium text-gray-400"> /night</span>
                </p>
              </div>

              <div className="px-5 pb-5">
              <button className="w-full py-2.5 rounded-xl font-medium
                   border border-teal-800 text-teal-800
                   hover:bg-teal-800 hover:text-white
                   transition-colors duration-200 cursor-pointer
                   group flex items-center justify-center gap-2">
                <span>View</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}