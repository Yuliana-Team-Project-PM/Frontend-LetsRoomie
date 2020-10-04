import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2'
import useRoomCardinfo from '../hooks/useRoomCardinfo'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { MdAttachMoney } from 'react-icons/md';

import '../assets/styles/components/RoomCard.scss';

const RoomCard = ({ images, description, namePlace, location, to, price, user, _id }) => {
    const [favorite, setFavorite] = useState(false);
    let email = sessionStorage.getItem('userEmail')
    const API = `https://api-letsroomie.herokuapp.com/user/${email}`
    const userData = useRoomCardinfo(API)
    let idUser
    console.log("data: " + userData.body)
    userData.body.map(item => {
        idUser = item._id
        sessionStorage.setItem('idUser', idUser)
    }
    )



    const handleFavorite = () => {
        if (sessionStorage.getItem('Token') === "") {
            Swal.fire("Necesitas iniciar sesión")
        }
        else {
            let Token = sessionStorage.getItem('Token')
            setFavorite(!favorite)

            if (favorite) {
                //Retiro de favoritos
                let favId = sessionStorage.getItem('favId');
                console.log(favId)
                fetch(`https://api-letsroomie.herokuapp.com/fav/${favId}`,
                    {
                        method: 'DELETE',
                        headers: {
                            'access-token': Token
                        }
                    })
                    .then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => {
                        console.log(response)
                    });


            } else {
                // Agrego a favorito
                let datosFav = {
                    "place": _id,
                    "user": idUser
                }

                console.log(Token)
                console.log(datosFav)
                fetch('https://api-letsroomie.herokuapp.com/fav',
                    {
                        method: 'POST',
                        body: JSON.stringify(datosFav),
                        headers: {
                            'Content-Type': 'application/json',
                            'access-token': Token
                        }
                    })
                    .then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => {
                        console.log(response)
                        sessionStorage.setItem('favId', response.body._id)
                        Swal.fire("Agregado a favoritos")
                    });

            }
        }
    }

    return (
        <section className='RoomCard'>
            <div className='RoomCard__img'>
                <img src={images[0]} alt='imagen de habitación' />
            </div>
            <div className='RoomCard__title'>

                <div>
                    <h2>{namePlace}</h2>
                    <p>{description.substr(0, 200)}...</p>
                </div>

                <AiFillHeart
                    className={favorite ? 'true' : 'false'}
                    onClick={handleFavorite}
                    data-tip data-for='favTip'
                />

                <ReactTooltip id='favTip' place='top' effect='solid' >
                    Agrega a tus favoritos
                </ReactTooltip>
            </div>

            <div className='RoomCard__description'>
                <p className='RoomCard__description--location'><MdLocationOn size={23} />{location} </p>
                <p className='RoomCard__description--price'><MdAttachMoney size={23} />{price} / mensual</p>
            </div>

            <div className='RoomCard__roomie'>
                <div className='RoomCard__roomie--profile'>
                    <img src={user.avatar} alt="foto de perfil" />
                    <div className='RoomCard__roomie--profile-text'>
                        <p>{user.name}</p>
                        <span>ROOMIE</span>
                    </div>
                </div>
                <Link to={to}>
                    <button className='RoomCard__roomie--button'>Ver más</button>
                </Link>
            </div>

        </section>
    );
};

export default RoomCard;
