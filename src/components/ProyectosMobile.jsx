import React from 'react'
import '../assets/css/proyectos-mobile.css'
import kreta from '../assets/statics/pngs/kreta1.webp'
import gisa from '../assets/statics/pngs/gisa1.webp'
import magnolia from '../assets/statics/pngs/magnolia.png'
import cerrar from '../assets/statics/svgs iconos/square-rounded-x.svg'
import iconoLink from '../assets/statics/svgs iconos/link.svg'
import { Link } from 'react-router-dom'



export default function ProyectosMobile() {
    return (
        <>
            <section className="proyectos-mobile">
                <Link to="/"><img src={cerrar} alt="Volver" className="cerrar" /></Link>

                <div className="card3-mobile">
                    <img src={magnolia} alt="Imagen Pagina Magnolia" className="card-image-mobile" />
                    <div className="wraper-card-mobile">
                        <a href="https://magnoliacasting.com.ar/" target='_blank' rel='noreferrer'>
                            <h2 className="titulo-card-mobile">Magnolia Casting</h2>
                            <img src={iconoLink} className='icono-link' alt="pagina Kreta" />
                        </a>
                        <p className='tecnologias'>Tecnologías utilizadas: React, JavaScript, HTML, CSS</p>
                        <h3 className="subtitulo-card-mobile">Landing page para empresa constructora</h3>
                        <p className="texto-card-mobile">
                            Magnolia Casting es una empresa especializada en la realización de castings para producciones audiovisuales, publicitarias y teatrales. El sitio fue desarrollado con el objetivo de brindar presencia institucional a la empresa en el ámbito digital, además de mostrar los proyectos en los que ha participado y facilitar el contacto con talentos y productoras interesadas en formar parte de futuras convocatorias.
                        </p>
                    </div>
                </div>

                <div className="card2-mobile">
                    <img src={kreta} alt="Imagen Pagina Kreta" className="card-image-mobile" />
                    <div className="wraper-card-mobile">
                        <a href="https://kreta.ar/" target='_blank' rel='noreferrer'>
                            <h2 className="titulo-card-mobile">KRETA</h2>
                            <img src={iconoLink} className='icono-link' alt="pagina Kreta" />
                        </a>
                        <p className='tecnologias'>Tecnologías utilizadas: React, JavaScript, HTML, CSS y mapas de Leaflet API</p>
                        <h3 className="subtitulo-card-mobile">Landing page para cooperativa</h3>
                        <p className="texto-card-mobile">
                            Trabajamos en una landing para Kreta Digital Media, una cooperativa audiovisual de la ciudad de Rosario. Kreta trabaja produciendo imágenes fotográficas y audiovisuales para publicidad, comunicación institucional y eventos. El objetivo de la landing es dar a conocer y promocionar los servicios de la cooperativa.
                        </p>
                    </div>
                </div>
                <div className="card1-mobile">
                    <img src={gisa} alt="Imagen Pagina Gisa" className="card-image-mobile" />
                    <div className="wraper-card-mobile">
                        <a href="https://gisaweb.netlify.app/" target='_blank' rel='noreferrer'>
                            <h2 className="titulo-card-mobile">GISA S. A.</h2>
                            <img src={iconoLink} className='icono-link' alt="pagina Kreta" />
                        </a>
                        <p className='tecnologias'>Tecnologías utilizadas: React, JavaScript, HTML, CSS</p>
                        <h3 className="subtitulo-card-mobile">Landing page para empresa constructora</h3>
                        <p className="texto-card-mobile">
                            Gisa SA es una empresa constructora ubicada en la provincia de Santa Fe, que se dedica a grandes obras de ingeniería como instalaciones de gas, cloacales y pluviales. El sitio fue desarrollado con el objetivo de dar presencia institucional a la empresa en el ámbito digital, además de mostrar las obras realizadas y fomentar el desarrollo de nuevos negocios a través de la plataforma.
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}
