import React from 'react'
import '../assets/css/proyectos-mobile.css'
import kreta from '../assets/statics/pngs/kreta1.webp'
import gisa from '../assets/statics/pngs/gisa1.webp'
import cerrar from '../assets/statics/svgs iconos/square-rounded-x.svg'
import iconoLink from '../assets/statics/svgs iconos/link.svg'
import { Link } from 'react-router-dom'



export default function ProyectosMobile() {
    return (
        <>  
            <section className="proyectos-mobile">
                <Link to="/"><img src={cerrar} alt="Volver" className="cerrar"/></Link>
                <div className="card2-mobile">
                    <img src={kreta} alt="Imagen Pagina Kreta" className="card-image-mobile"/>
                    <div className="wraper-card-mobile">
                        <a href="https://kreta.ar/" target='_blank' rel='noreferrer'>
                            <h2 className="titulo-card-mobile">Kreta</h2>
                            <img src={iconoLink} className='icono-link' alt="pagina Kreta"/>
                        </a>
                        <h3 className="subtitulo-card-mobile">Landing page para cooperativa</h3>
                        <p className="texto-card-mobile">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis neque mauris, vitae blandit sem ullamcorper eu. Fusce risus nunc, sodales sed ornare ut, viverra vitae orci. Vestibulum convallis orci ut nunc finibus, eget venenatis nisi ullamcorper. 
                        </p>
                    </div>
                </div>
                <div className="card1-mobile">
                <img src={gisa} alt="Imagen Pagina Gisa" className="card-image-mobile"/>
                    <div className="wraper-card-mobile">
                        <a href="https://gisaweb.netlify.app/" target='_blank' rel='noreferrer'>
                            <h2 className="titulo-card-mobile">GisaWeb</h2>
                            <img src={iconoLink} className='icono-link' alt="pagina Kreta"/>
                        </a>
                        <h3 className="subtitulo-card-mobile">Landing page para empresa constructora</h3>
                        <p className="texto-card-mobile">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis neque mauris, vitae blandit sem ullamcorper eu. Fusce risus nunc, sodales sed ornare ut, viverra vitae orci. Vestibulum convallis orci ut nunc finibus, eget venenatis nisi ullamcorper. 
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
