import React from 'react';
import '../assets/styles/components/RoomieCard.scss';

/*
Props del componente
    firstName
    lastName
    description
    interests (vector)
    imagen

Observaciones
    1. El back debe entregar la url para la imagen de perfil
    2. El back debe entregar el nombre del Roomie
    3. Existe algún otro perfil en el card que no sea roomie?
    4. El back debe entregar la descripción
    5. El back debe entregar los intereses (El card debe mostrarlos de manera dinámica)
*/

const RoomieCard = props => {
        return(
            <div className="RoomieCard">
                <section className="RoomieCard__header">
                    <div className="RoomieCard__header-img">
                        <img src="https://images.squarespace-cdn.com/content/v1/57d03e423e00be61bf183b3d/1525433467068-RHO7658EDIFFHJGVYHZ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/GettyImages-884727654+%281%29.jpg" alt="Roomie Photograph"/>
                    </div>
                    <div className="RoomieCard__header-name">
                        <h2>{props.firstName} {props.lastName}</h2>
                        <h2 className="RoomieCard__header-Perfil">ROOMIE</h2>
                    </div>
                </section>
                <section className="RoomieCard__description">
                    <h3>Descripción</h3>
                    <p>{props.description}</p>
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