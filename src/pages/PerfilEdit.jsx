import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import FavoriteButton from '../components/FavoriteButton';

import '../assets/styles/components/PerfilEdit.scss';

const PerfilEdit = () => {
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
                    <img src="https://resizer.codigounico.com/resizer/resizer.php?imagen=https://www.codigounico.com/wp-content/uploads/sites/2/2020/01/las-mujeres-mas-sexys-de-instagram-en-2020-2.jpg&nuevoancho=750&crop=0" alt=""/>
                </div>
                <div className="PerfilEdit__PersonalDesc">
                    <label htmlFor="">
                        Descripción personal:
                    </label>
                    <textarea name="comentarios" rows="10" cols="30"></textarea>
                </div>
                <label htmlFor="">Elige tus intereses:</label>
                <div className="PerfilEdit__interest">
                        <div>Música</div>
                        <div>Literatura</div>
                        <div>Cine</div>
                        <div>Bicicletas</div>
                </div>
            </section>
            <FavoriteButton />
            <Footer />
        </>
    );
};

export default PerfilEdit;