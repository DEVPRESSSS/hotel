import { useLocation } from "react-router-dom"
import { TextInput } from "../../../../components/Forms/TextInput";
import { LabelStyle } from "../../../../components/Forms/LabelStyle";
import { DropdownInput } from "../../../../components/Forms/DropdownInput";
import { useRoomType } from "../../../../hooks/useRoomType";
export function RoomFormPage(){
    const location = useLocation();
    const entityName = location.state?.entityName || "";
    
    //Get the room type from api
    const {roomTypes} = useRoomType();
    const value =  roomTypes.map(rt => ({
        roomTypeId : rt.roomTypeId,
        roomTypeName : rt.roomTypeName

    }));     
    
    console.log(value.roomTypeId);
    return (
        <div className="w-full shadow-sm p-2 border-t-3 rounded-lg border-teal-700">
            <div className="flex flex-col w-full border-b-2 border-gray-200 p-2">
                    <div className="flex-1  border-b-2 border-gray-100">
                        <h5>Create new {entityName}</h5>
                    </div>
                    <div className="flex-1">
                        <div className="grid grid-cols-2 gap-2">
                            {/*Room number */}
                            <div>
                                <LabelStyle name="Room number"/>
                                <TextInput />
                            </div>
                            {/*Capacity*/}  
                             <div>
                                <LabelStyle name="Capacity"/>
                                <TextInput />
                            </div>  
                              {/*Room Type*/}  
                            <div>
                                <LabelStyle name="Room Type"/>
                                 <DropdownInput name="Room Type" optionValue = {roomTypes}/>
                            </div> 
                            {/*Floor*/} 
                            <div>
                                <LabelStyle name="Floor"/>
                                 <DropdownInput name="Floor"/>
                            </div>             
                        </div>
                    </div>
            </div>
        </div>
    )
}