import React from 'react'
import '../assets/css/proyectos.css'
import kreta from '../assets/statics/pngs/kreta1.webp'
import gisa from '../assets/statics/pngs/gisa1.webp'

export default function Proyectos() {
    return (
        <>
            <div className="card2">
                <img src={kreta} alt="Imagen Pagina Kreta" className="card-image" />
                <div className="wraper-card">
                    <a href="https://kreta.ar/">https://kreta.ar/</a>
                    <h2 className="titulo-card">KRETA</h2>
                    <h3 className="subtitulo-card">Landing page para cooperativa</h3>
                    <p className="texto-card">
                        Trabajamos en una landing para Kreta Digital Media, una cooperativa audiovisual de la ciudad de Rosario. Kreta trabaja produciendo imágenes fotográficas y audiovisuales para publicidad, comunicación institucional y eventos. El objetivo de la landing es dar a conocer y promocionar los servicios de la cooperativa.
                    </p>
                </div>
            </div>
            <div className="card1">
                <img src={gisa} alt="Imagen Pagina Gisa" className="card-image" />
                <div className="wraper-card">
                    <a href="https://gisaweb.netlify.app/">https://gisaweb.netlify.app/</a>
                    <h2 className="titulo-card">GISA S. A.</h2>
                    <h3 className="subtitulo-card">Landing page para empresa constructora</h3>
                    <p className="texto-card">
                        Gisa SA es una empresa constructora ubicada en la provincia de Santa Fe, que se dedica a grandes obras de ingeniería como instalaciones de gas, cloacales y pluviales. El sitio fue desarrollado con el objetivo de dar presencia institucional a la empresa en el ámbito digital, además de mostrar las obras realizadas y fomentar el desarrollo de nuevos negocios a través de la plataforma.
                    </p>
                </div>
            </div>
        </>
    )
}
