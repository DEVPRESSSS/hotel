import { useParams } from "react-router-dom"
import { RoomFormPage } from "./RoomForm";
import { PermissionFormPage } from "./PermissionForm";
import { RoomTypeFormPage } from "./RoomTypeForm";
import { RoleFormPage } from "./RoleForm";
import { RolePermissionFormPage } from "./RolePermissionForm";

export function UpsertFormPage(){
    const {entity} = useParams();

    const form = {
        room : <RoomFormPage/>,
        permission : <PermissionFormPage/>,
        roomtype : <RoomTypeFormPage/>,
        role : <RoleFormPage/>,
        rolepermission : <RolePermissionFormPage/>,
    }
    return (
        <h1>{form[entity]}</h1>
    )
}
