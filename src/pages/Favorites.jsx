import React from 'react';
import {useState,useEffect} from 'react'
import { Suspense,lazy} from 'react'
import '../assets/styles/components/Favorites.scss';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const FavoriteItem=lazy(()=>import('../components/FavoriteItem'))

const Favorites = () => {
    let idUser=sessionStorage.getItem('idUser')
    let Token=sessionStorage.getItem('Token')
    const useFavoritos=(API)=>{
        const[ lugares,setLugares]=useState({
            body:[],
            status: [],
            __proto__: []
        });
        useEffect(()=>{
            fetch(API,{
                headers:{
                    'Content-Type': 'application/json',
                    'access-token':Token
                },   
            })
                .then(response=>response.json())
                .then(data=>setLugares(data));
        },[]); 
        return lugares
    }
    

    const API=`https://api-letsroomie.herokuapp.com/fav?user=${idUser}`
    const lugares=useFavoritos(API)
    console.log(lugares.body)

    return(
        <>
            <Navbar />
            <section className='Favorites'>
                <h1 className='Favorites__title'>Tus Favoritos</h1>
                {lugares.body.map(item=>
                            <Suspense fallback={<h1>Cargando ...</h1>}>
                            <FavoriteItem {...item.place}/>
                            </Suspense>
                        )
                }
            </section>
            <Footer />
        </>
    );
};

export default Favorites;