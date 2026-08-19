import { useLocation } from "react-router-dom"
import { TextInput } from "../../../../components/Forms/TextInput";
import { LabelStyle } from "../../../../components/Forms/LabelStyle";
import { DropdownInput } from "../../../../components/Forms/DropdownInput";
import { useRoomForm } from "../../../../hooks/useRoomForm";
import { RequiredFormPage } from "../../../../components/Errors/FormRequired";


export function RoomFormPage() {

    const location = useLocation();
    const entityName = location.state?.entityName || "";
    
    const {formData,
          roomTypesValue,
          floorsValue,
          handleChange,
          handleSubmit,
          cancel,
          errors
        } = useRoomForm();
 
    return (
        <div className="w-full mx-auto bg-white shadow-md rounded-xl border-t-4 border-teal-700 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h5 className="text-lg font-semibold text-gray-800">
                     {entityName}
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
                                   <RequiredFormPage nameOfError={errors.roomNumber}/>
                        </div>

                        {/* Capacity */}
                        <div>
                            <LabelStyle name="Capacity" />
                            <TextInput name="capacity"
                                       value={formData.capacity}
                                       onChange= {handleChange}
                                       placeholder="1" />
                                        <RequiredFormPage nameOfError={errors.capacity}/>
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
                                    <RequiredFormPage nameOfError={errors.roomTypeId}/>
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
                                   <RequiredFormPage nameOfError={errors.floorId}/>
                        </div>
                    </div>
                </div>

                {/* Footer actions */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={cancel}
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