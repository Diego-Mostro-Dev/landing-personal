import React from 'react'
import '../assets/css/sobre-mi.css'
import fotomia from '../assets/statics/jpgs/mostro.webp'
import { useNavigate } from "react-router-dom";

export default function Sobre_mi() {
    const Navigate = useNavigate();

    const redirectToFormulario = () => {
        Navigate("/");
        setTimeout(() => {
            const formularioElement = document.getElementById("formulario");
            if (formularioElement) {
                const yOffset = formularioElement.getBoundingClientRect().top + window.pageYOffset - 150;
                window.scrollTo({ top: yOffset, behavior: "smooth" });
            }
        }, 100);
    };


    return (
        <>

            <div className="sobre-mi" id='sobre-mi'>
                <h1 className="titulo-sobremi">Programador web</h1>
                <div className="wrap-sobremi">
                    <img src={fotomia} alt="Mi foto" />
                    <div className="subtitulo-texto-sobremi">
                        <h2 className="subtitulo-sobremi">Desarrollá tu web personalizada</h2>
                        <p className="texto-sobremi">
                            Ofrezco servicios integrales de desarrollo web que incluyen, creación de sitios web responsivos, mantenimiento contínuo, y optimización SEO. Utilizo tecnologías modernas como React, JavaScript, HTML, CSS, SQL y Python para asegurar que tu presencia online sea atractiva, funcional y eficiente.<br />
                            <br />

                            Trabajo con un enfoque personalizado, desarrollando propuestas a medida de las necesidades de mis clientes.<br />
                            <br />

                            ¿Tenés un proyecto en mente?

                        </p>
                        <button onClick={redirectToFormulario} className="contactame">Charlemos</button>
                    </div>
                </div>
            </div>
        </>
    )
} 
