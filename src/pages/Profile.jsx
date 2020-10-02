import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import FavoriteButton from '../components/FavoriteButton';

import '../assets/styles/components/PerfilEdit.scss';

const Profile = () => {
    const [selectedFile, setSelectedFile]=useState()
    const onChangeHandler=event=>{
        setSelectedFile( event.target.files[0])
      }
    const onClickHandler = () => {
        const data = new FormData() 
        data.append('galleryImage ', btoa(selectedFile))
        fetch("https://api-letsroomie.herokuapp.com/api/profile/multipleUpload", {
            method: "POST",
            body: data
          });
          
    }

    
    return(
        <>
            <Navbar />
                <SearchBar />
                <section className="PerfilEdit">
                    <div className="PerfilEdit__Title">
                        <h2>Edita tu perfil</h2>
                    </div>
                    <div className="PerfilEdit__photo">
                        <p>Foto de perfil:</p>
                        <img src="https://resizer.codigounico.com/resizer/resizer.php?imagen=https://www.codigounico.com/wp-content/uploads/sites/2/2020/01/las-mujeres-mas-sexys-de-instagram-en-2020-2.jpg&nuevoancho=750&crop=0" alt="foto de perfil"/>
                    </div>
                    <div className="PerfilEdit__PersonalDesc">
                        <label htmlFor="">
                            Descripción personal:
                        </label>
                        <textarea name="comentarios" rows="10" cols="30"></textarea>
                        <label htmlFor="">Imagen</label>
                        <input type="file" name="file" onChange={onChangeHandler}/>
                    </div>
                    <label htmlFor="">Elige tus intereses:</label>
                    <div className="PerfilEdit__interest">
                            <div className="PerfilEdit__interest--item">Música</div>
                            <div className="PerfilEdit__interest--item">Literatura</div>
                            <div className="PerfilEdit__interest--item">Cine</div>
                            <div className="PerfilEdit__interest--item">Bicicletas</div>
                    </div>

                    <button className='PerfilEdit__button' onClick={onClickHandler}>Guardar</button>

                </section>
            <FavoriteButton />
            <Footer />

        </>
    );
};

export default Profile;
