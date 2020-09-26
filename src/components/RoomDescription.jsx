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
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEFElEQVRogbWZz2tcVRTHP+dNSJPSNqGbmmS6UFGULKoQizOZRBeWQLEKgoLtX2GpCxdK68IULaIIIkoFEUlrkVIVikUhPyZvLFqkxEGxbSzmNSYqCSGmcZKZd1ykkRASc899b77Le8/3fL/feXfenXtHSA0qPdnSI6g+DXQDd4FmV+YkAqYEihJwYWgi/z2IpqEqyVto0JMND4O8iurdjqRxEX1lOOoeAImTqCcK0NtWelCDeADY59nih4zK4cHJ/M++HrwD9OwN+4j1DNDq2+MO5lXjI8XJni98yF4BerPFg6ryOZDx4W+AWix6aDQqXLQSzQEebw8fqImWSP7Jr8d8nNHc6G+FsoUU2DQ0iEUHSN88wM6gJh+DmjyZigsd4RGFh2y+THi4Nzv6vIVgCKAicNzqyApVOQHqvLSdAxSyxf3APV6ubLj3sb1hl2uxcwDR4CmDiQh4Nq7orriiu1TkGeAXV3ItxlmrwWCq27EuqorsK0X5mTVj53PZcKhB9SqQTVHL9CVud6x7YZ15AEpRfkaRoy4NBDpcTVkCtLkUxRX9arO55cVg0zkfLbAFsCy3DbGztcH17eKsZQkw61KUaeLAZnOVpcoTaWqB5S0E0y51qtKfy4a714/nsuFulH5HuSlXX86PSpUy4rQL39+gerXQER5dXfON22sHUO0H7nPREvRHV1/uAQLGDGeorKCfNjbX7pCdeatiY66lhiUk3xptJEHoWugcYKalpQTc9rJjw/xCW+N3rsXOAcrlziWFUT9PJgxdudK17Fps++2tcsHuxwZVOW+ptwVobPgMSHSLsAVqEldNZ2NTgMGb+6dQijZPBgjfjEz1/mmhGI+UoCKnrRz35nxgpZgD1IRzGLZ6A/7a0TxnvloxByhF+UVEPrHytoIopy9eP1ix8swBAATe9+H9D5Qg47U0vQIMR/kxgdR2ZoXB4ejRaz5crwAAiLzjzV1vQvUtb64vcU8UnQWu+/LX4Kfhye4vfcneAc7xXA1405e/CkVOJrli919CwI7muQ+B3xO0mJhtbTmTxEOiACuvPfX+LqhwqlzuXEriIVEAgG3bmt7Fb2P7Y/vy34l39cQBvh7vmgM9ZeWJyGuXpvsWkuonDgDQXF14G1Xng7jAreWUNsNUAlya7lvQQFxvHFDR46Uov5iGdioBAGZbWt9D5FeH0mu39zR9lJZuagHK5c4l0fjEVnWi+rLlyLhlv7QarUCD3vbwsgqb3O/L5ZFbuVxaf3JDik9gBRJrIMc2mVTV+Fia5iH1ADAS5YdEdaOD+dniZCH142jqAQCqGXkR+GfN0GKmFrxUD626BAgnum+AvvHfgOrJwanczXpo1SUAQFWCfmAcGM80Lr9eL526otA+cqjQET5ZT41/AcpQVOTYIwGDAAAAAElFTkSuQmCC"/>
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