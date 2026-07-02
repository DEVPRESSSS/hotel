import { useParams } from "react-router-dom"
import { RoomFormPage } from "./RoomForm";

export function UpsertFormPage(){
    const {entity} = useParams();
    const form = {
        room : <RoomFormPage/>,
    }
    return (
        <h1>{form[entity]}</h1>
    )
}
