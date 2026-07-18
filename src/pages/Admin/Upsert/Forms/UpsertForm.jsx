import { useParams } from "react-router-dom"
import { RoomFormPage } from "./RoomForm";
import { PermissionFormPage } from "./PermissionForm";
import { RoomTypeFormPage } from "./RoomTypeForm";

export function UpsertFormPage(){
    const {entity} = useParams();

    const form = {
        room : <RoomFormPage/>,
        permission : <PermissionFormPage/>,
        roomtype : <RoomTypeFormPage/>,
    }
    return (
        <h1>{form[entity]}</h1>
    )
}
