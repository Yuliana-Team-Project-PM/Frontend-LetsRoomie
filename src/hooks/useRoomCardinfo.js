import {useState,useEffect} from 'react'

const useRoomCardinfo=()=>{
    const[ lugares,setLugares]=useState({
        body:[],
        status: [],
        __proto__: []
    });
    useEffect(()=>{
        fetch('https://api-letsroomie.herokuapp.com/place')
            .then(response=>response.json())
            .then(data=>setLugares(data));
    },[]); 
    return lugares
}

export default useRoomCardinfo