import React from 'react';
import '../assets/styles/components/RoomDescription.scss';

/*
Observaciones
    1. El back debe entregar la url para la imagen de perfil
    2. El back debe entregar el nombre del Roomie
    3. Existe algún otro perfil en el card que no sea roomie?
    4. El back debe entregar la descripción
    5. El back debe entregar los intereses (El card debe mostrarlos de manera dinámica)
*/
const RoomDescription=()=>{
        return(
            <div className="RoomDescription">
                <section className="RoomDescription-header">
                    <img src="" alt="icono gps"/>
                    <h2>CDMX,México</h2>
                </section>
                <section className="RoomDescription-descriptionDetail">
                    <p>
                        Descripción larga, habitación con todos los muebles equipados. Ideal para estudiantes o freelancers.
                        El cuarto incluye cocina y lavadora.
                    </p>
                </section>
                <section className="RoomDescription-desctiptionItems">
                    <p>Baño</p>
                    <p>TV</p>
                    <p>Wi-fi</p>
                    <p>Cocina disponible</p>
                    <p>Refrigerador</p>
                    <p>Cuarto de Estudio</p>
                </section>
            </div>
        )
}

export default RoomDescription