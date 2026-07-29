import { useState, useEffect } from "react";
import { getChosenRoomById, getProducts, getRoomByRoomTypeId } from "../api/defaultProductApi";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

  
    return { products, loading, error };
}

export function useViewSelectedRooms(id){

    const [selectedRooms, setSelectedRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!id){
            return;
        }

        getRoomByRoomTypeId(id)
            .then(setSelectedRooms)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    return { selectedRooms, loading, error };
}

export function useViewSelectedRoom(id){

    const [selectedRoom, setSelectedRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!id){
            return;
        }

        getChosenRoomById(id)
            .then((data) => setSelectedRoom(data.room))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    return { selectedRoom, loading, error };
}