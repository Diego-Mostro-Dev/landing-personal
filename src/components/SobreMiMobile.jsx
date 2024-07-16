import React from 'react'
import '../assets/css/sobre-mi-mobile.css'
import { Link } from 'react-router-dom'
import volver from '../assets/statics/svgs iconos/arrow-left-s-line.svg'

export default function SobreMiMobile() {
    return (
    <>
        <div className="sobre-mi-detalle">
                <Link to="/">
                    <div className="wraper-detalle-volver-sobremi">
                        <img src={volver} alt="" className="volver" />
                        <h4>Volver</h4>
                    </div>
                </Link>
                    <h2 className="titulo-sobremi-detalle">Desarrollá tu web personalizada</h2>
                    <p className="texto-sobremi-detalle">
                        Ofrezco servicios integrales de desarrollo web que incluyen diseño UX/UI, creación de sitios web responsivos, mantenimiento continuo, y optimización SEO.
    Trabajo con tecnologías modernas como React, JavaScript, HTML, CSS, SQL y Python para asegurar que tu presencia online sea atractiva, funcional y eficiente. 
    Disfruta de un enfoque personalizado, atención al cliente excepcional y el respaldo de un desarrollador con experiencia en múltiples tecnologías, asegurando que tu proyecto sea exitoso y eficiente.
                    </p>
                    <Link to="/formulario-mobile">
                        <span className="contactame-detalle">Contactame para tu web</span>
                    </Link>
        </div>

    </>
    )
} 