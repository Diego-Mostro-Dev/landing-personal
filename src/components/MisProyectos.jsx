import React from 'react'
import '../assets/css/mis-proyectos.css'
import trabajos from '../assets/statics/gifs/trabajo.mp4'
import { Link } from 'react-router-dom'


export default function MisProyectos() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            duration: 1500,
            behavior: 'smooth'
        });
    };
    return (
        <div className="div3">
            <Link to="/proyectos-mobile" className="proyectos" onClick={scrollToTop}>
                <div>
                    <video loop autoPlay muted src={trabajos} type='video/mp4'></video>
                </div>
                <h2 className="titulo-proyectos">Mirá mis proyectos</h2>
            </Link>
        </div>
    )
}
