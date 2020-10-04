import React from 'react';
import '../assets/styles/components/RoomieCard.scss';


const RoomieCard = ({about,name,avatar}) => {
        // console.log(about)
        return(
            <div className="RoomieCard">
                <section className="RoomieCard__header">
                    <div className="RoomieCard__header-img">
                        <img src={avatar} alt="Roomie Photograph"/>
                    </div>
                    <div className="RoomieCard__header-name">
                        <h2>{name}</h2>
                        <h2 className="RoomieCard__header-Perfil">ROOMIE</h2>
                    </div>
                </section>
                <section className="RoomieCard__description">
                    <h3>Descripción</h3>
                    <p>{about}</p>
                </section>
                <section className="RoomieCard__interests">
                    <h3>Intereses</h3>
                    <div className="RoomieCard__interests-btn">
                        <div>Música</div>
                        <div>Literatura</div>
                        <div>Cine</div>
                        <div>Bicicletas</div>
                    </div>
                </section>
            </div>
        )
}

export default RoomieCard