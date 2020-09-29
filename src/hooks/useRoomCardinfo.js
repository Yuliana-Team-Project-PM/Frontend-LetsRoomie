import {useState,useEffect} from 'react'

const useRoomCardinfo=(API)=>{
    const[ lugares,setLugares]=useState({
        body:[],
        status: [],
        __proto__: []
    });
    useEffect(()=>{
        fetch(API)
            .then(response=>response.json())
            .then(data=>setLugares(data));
    },[]); 
    return lugares
}

export default useRoomCardinfo