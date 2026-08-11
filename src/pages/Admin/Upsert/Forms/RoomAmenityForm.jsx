import { useLocation, useParams } from "react-router-dom"
import { LabelStyle } from "../../../../components/Forms/LabelStyle";
import { DropdownInput } from "../../../../components/Forms/DropdownInput";
import { useEffect, useMemo, useState } from "react";
import { toast } from 'react-toastify';
import { useGoBack } from "../../../../hooks/usePrevPage";
import { useRooms } from "../../../../hooks/useRooms";
import { createRoomAmenity, getRoomAmenityById, updateRoomAmenity } from "../../../../api/roomAmenityApi";
import { useAmenity } from "../../../../hooks/useAmenity";

export function RoomAmenityFormPage() {
    const location = useLocation();
    const entityName = location.state?.entityName || "";
    //Handle cancel button
    const previousPage = useGoBack();

    //Fetch roles from API with the use of useMemo
    const { rooms } = useRooms();
    const roomsValue = useMemo(
        () => rooms.map(r => ({ id: r.roomId, name: r.roomNumber })),
        [rooms]
    );
    //Fetch permission from API with the use of useFloor
    const {amenities} = useAmenity();
    const amenityValue = useMemo(
        () => amenities.map(a => ({ id: a.amenityId, name: a.name })),
        [amenities]
    );

    //Put the inputs in the UseState
    const [formData, setFormData] = useState({
     
       roomId : "" ,
       amenityId : ""
    });

    //Handle change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) =>({
            ...prev,
            [name] : value
        }));
    };

    //Get the Id of the Role
    const {id} = useParams();
    useEffect(() => {
        if (!id) return; 

        const fetchRoomAmenity = async () => {
            try {
                const roomAmenity = await getRoomAmenityById(id);
                setFormData({
           
                    roomId: roomAmenity.roomId,
                    amenityId: roomAmenity.amenityId
                });
            } catch (error) {
                toast.error(`${error.message}`);
            }
        };

        fetchRoomAmenity();
    }, [id]);

    //Handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let success;
            if (id) {
                success = await updateRoomAmenity(id, formData);
            } else {
                success = await createRoomAmenity(formData);
            }
            previousPage();
            toast.success(`${success.data.message}`);

        } catch (error) {
            toast.error(`${error.message}`);

        }
    };

    return (
        <div className="w-full mx-auto bg-white shadow-md rounded-xl border-t-4 border-teal-700 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h5 className="text-lg font-semibold text-gray-800">
                    Create new {entityName}
                </h5>
                <p className="text-sm text-gray-500 mt-0.5">
                    Fill in the details below to add a new {entityName.toLowerCase() || "item"}.
                </p>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit}>
                <div className="px-6 py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">

                        {/* Room Type */}
                        <div>
                            <LabelStyle name="Room" />
                            <DropdownInput 
                                    nameFor="room"
                                     name="roomId"
                                     value={formData.roomId}
                                     onChange= {handleChange}
                                     optionValue={roomsValue} />
                        </div>

                        {/* Floor */}
                        <div>
                            <LabelStyle name="Amenity" />
                            <DropdownInput 
                                    nameFor="amenity"
                                    name="amenityId" 
                                    value={formData.amenityId}
                                    onChange= {handleChange}
                                    optionValue={amenityValue}/>
                        </div>
                    </div>
                </div>

                {/* Footer actions */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={previousPage}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 border-2 border-gray-300
                                hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-teal-700
                                hover:bg-teal-800 transition-colors duration-150"
                    >
                        Save 
                    </button>
                </div>
            </form>
        </div>
    )
}