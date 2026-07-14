import { useLocation, useNavigate } from "react-router-dom"
import { TextInput } from "../../../../components/Forms/TextInput";
import { LabelStyle } from "../../../../components/Forms/LabelStyle";
import { DropdownInput } from "../../../../components/Forms/DropdownInput";
import { useRoomType } from "../../../../hooks/useRoomType";
import { useFloor } from "../../../../hooks/useFloor";
import { useMemo, useState } from "react";
import { createRoom } from "../../../../api/roomApi";
import { toast } from 'react-toastify';

export function RoomFormPage() {
    const location = useLocation();
    const entityName = location.state?.entityName || "";

    const navigate = useNavigate();
    
    //Fetch room types from API with the use of useMemo
    const { roomTypes } = useRoomType();
    const roomTypesValue = useMemo(
        () => roomTypes.map(rt => ({ id: rt.roomTypeId, name: rt.roomTypeName })),
        [roomTypes]
    );
    //Fetch floors from API with the use of useFloor
    const {floors} = useFloor();
    const floorsValue = useMemo(
        () => floors.map(rt => ({ id: rt.floorId, name: rt.floorName })),
        [floors]
    );

    //Put the inputs in the UseState
    const [formData, setFormData] = useState({
       roomNumber: "",
       capacity: "",
       roomTypeId : "" ,
       floorId : ""
    });

    //Handle change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) =>({
            ...prev,
            [name] : value
        }));
    };

    //Handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //const success = await createRoom("rooms", formData.roomId ?? "", formData);
            const success = await createRoom(formData);
            if(success){
                toast.success(`${success.message}`);
                navigate("/room");
            }
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
                        {/* Room number */}
                        <div>
                            <LabelStyle name="RoomNumber" />
                            <TextInput name="roomNumber"
                                     value={formData.roomNumber}
                                    onChange= {handleChange}
                                    placeholder="eg. ROOM-01" />
                        </div>

                        {/* Capacity */}
                        <div>
                            <LabelStyle name="Capacity" />
                            <TextInput name="capacity"
                                      value={formData.capacity}
                                       onChange= {handleChange}
                                       placeholder="1" />
                        </div>

                        {/* Room Type */}
                        <div>
                            <LabelStyle name="Room Type" />
                            <DropdownInput 
                                    nameFor="room type"
                                     name="roomTypeId"
                                     value={formData.roomTypeId}
                                     onChange= {handleChange}
                                     optionValue={roomTypesValue} />
                        </div>

                        {/* Floor */}
                        <div>
                            <LabelStyle name="Floor" />
                            <DropdownInput 
                                    nameFor="floor"
                                    name="floorId" 
                                    value={formData.floorId}
                                    onChange= {handleChange}
                                    optionValue={floorsValue}/>
                        </div>
                    </div>
                </div>

                {/* Footer actions */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                    <button
                        type="button"
                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 border-2 border-gray-300
                                hover:bg-gray-100 transition-colors duration-150"
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