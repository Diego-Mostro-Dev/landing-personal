import React from 'react'
import '../assets/css/correo.css'
import correo from '../assets/statics/pngs/exito.png';

export default function Correo() {
    return (
        <div className="div4">
            <a href="mailto:diegosalvadodev@gmail.com" target="_blank" rel='noreferrer' className="correo">
                <img className="icono-correo" src={correo} alt="" />
            </a>
        </div>
    )
}
