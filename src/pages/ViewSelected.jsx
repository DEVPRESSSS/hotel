import { useNavigate, useParams } from "react-router-dom";
import { useViewSelectedRooms } from "../hooks/useDefaultProduct";
import HotelImage1 from "../assets/HotelIntro.png";
import { getChosenRoomById } from "../api/defaultProductApi";
import { toast } from "react-toastify";

function CapacityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}



export function ViewSelectedPage() {

  const { id } = useParams();
  const { selectedRooms} = useViewSelectedRooms(id);

  const navigate = useNavigate();

  if (!id) return null;


  const clickBooking = async(id) =>{

      if(!id)
        return null;

      const data = await getChosenRoomById(id);
      if(!data){
         toast.error(data.message)
      }
            //Navigate to the page
      navigate(`/selectedroom/${id}`)

  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedRooms.map((room) => (
            <div
              key={room.roomId}
              className="group rounded-2xl  shadow-sm overflow-hidden
                         hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Image with floor badge */}
              <div className="relative">
                <img
                  src={HotelImage1}
                  alt={`Room ${room.roomNumber}`}
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm
                                  text-gray-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                 
                  {room.floorName}
                </span>
              </div>

              {/* Body */}
              <div className="px-5 pt-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 leading-tight">
                       {room.roomNumber}
                    </h3>
                    <p className="text-sm text-gray-400">{room.roomName}</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-medium text-gray-500
                                    bg-gray-50 px-2 py-1 rounded-lg shrink-0">
                    <CapacityIcon />
                    {room.capacity}
                  </span>
                </div>

                <p className="mt-3 text-teal-800 text-2xl font-bold">
                  ${room.pricePerNigth}
                  <span className="text-sm font-medium text-gray-400"> /night</span>
                </p>
              </div>

              <div className="border-t border-gray-100 mx-5 my-4" />
              
              {/* Amenities */}
              <div className="px-5 mb-4">
                <div className="grid grid-cols-3 gap-2">
                  {room.roomAmenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center h-8 px-2 rounded-lg
                                bg-gray-100 "
                      title={amenity}
                    >
                      <p className="text-xs font-medium text-gray-500 truncate">
                        {amenity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* CTA */}
              <div className="px-5 pb-5">
                <button
                  onClick={()=> clickBooking(room.roomId)}
                  className="w-full py-2.5 rounded-xl font-medium
                             border border-teal-800 text-teal-800
                             hover:bg-teal-800 hover:text-white
                             transition-colors duration-200 cursor-pointer
                             flex items-center justify-center gap-2"
                >
                  <span>Select</span>
                 <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor"
                         class="size-4">
                    <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
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