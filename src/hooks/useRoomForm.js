import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useRoomType } from "./useRoomType";
import { useFloor } from "./useFloor";
import { useForm } from "./useForm";
import { useGoBack } from "./usePrevPage";

import {
    createRoom,
    getRoomById,
    updateRoom
} from "../api/roomApi";

export function useRoomForm() {

    const navigate = useNavigate();
    const cancel = useGoBack();

    const { id } = useParams();

    const {
        formData,
        setFormData,
        handleChange
    } = useForm({
        roomNumber: "",
        capacity: "",
        roomTypeId: "",
        floorId: ""
    });

    const { roomTypes } = useRoomType();
    const roomTypesValue = useMemo(
        () =>
            roomTypes.map((roomType) => ({
                id: roomType.roomTypeId,
                name: roomType.roomTypeName
            })),
        [roomTypes]
    );

    const { floors } = useFloor();
    const floorsValue = useMemo(
        () =>
            floors.map((floor) => ({
                id: floor.floorId,
                name: floor.floorName
            })),
        [floors]
    );

    useEffect(() => {
        if (!id) return;

        const fetchRoom = async () => {
            try {
                const room = await getRoomById(id);

                setFormData({
                    roomNumber: room.roomNumber,
                    capacity: room.capacity,
                    roomTypeId: room.roomTypeId,
                    floorId: room.floorId
                });
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchRoom();
    }, [id, setFormData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;

            if (id) {
                response = await updateRoom(id, formData);
            } else {
                response = await createRoom(formData);
            }

            toast.success(response.data.message);
            navigate("/room");

        } catch (error) {
            toast.error(error.message);
        }
    };

    return {
        formData,
        roomTypesValue,
        floorsValue,
        handleChange,
        handleSubmit,
        cancel
    };
}