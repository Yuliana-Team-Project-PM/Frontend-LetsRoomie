import React from 'react';
import '../assets/styles/components/RoomDescription.scss';

import { MdLocationOn } from 'react-icons/md'; 

/*
Observaciones
    1. El back debe entregar la url para la imagen de perfil
    2. El back debe entregar el nombre del Roomie
    3. Existe algún otro perfil en el card que no sea roomie?
    4. El back debe entregar la descripción
    5. El back debe entregar los intereses (El card debe mostrarlos de manera dinámica)
*/
const RoomDescription=({location,description,bath,cleaning,closet,parking,tv,wifi})=>{
        return(
            <div className="RoomDescription">
                <section className="RoomDescription-header">
                    <MdLocationOn className="RoomDescription-header--icon" />
                    <h2>{location}</h2>
                </section>
                <section className="RoomDescription-descriptionDetail">
                    <p>
                        {description}
                    </p>
                </section>
                <section className="RoomDescription-desctiptionItems">
                    {bath ? <p>Baño</p> : '' }
                    {tv ? <p>TV</p> : '' }
                    {wifi ? <p>Wi-fi</p> : '' }
                    {closet ? <p>Closet</p> : '' }
                    {parking ? <p>Parqueadero</p> : '' }
                    {cleaning ? <p>cleaning</p> : '' }
                </section>
            </div>
        )
}

export default RoomDescription