import React from 'react'
import '../assets/css/correo.css'
import correo from '../assets/statics/pngs/exito.webp';
import instagram from '../assets/statics/pngs/Instagram.webp';

export default function Correo() {
    return (
        <div className="div4">
            <a href="mailto:diegosalvadodev@gmail.com" title='Escribime' target="_blank" rel='noreferrer' className="correo">
                <img className="icono-correo" src={correo} alt="" />
            </a>
            <a href="https://www.instagram.com/diegosalvadodev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" title='Instagram' target="_blank" rel='noreferrer'>
                <img src={instagram} alt="Logo de instagram" />
            </a>
        </div>
    )
}
