import React from 'react'
import '../assets/css/proyectos.css'
import kreta from '../assets/statics/pngs/kreta1.webp'
import gisa from '../assets/statics/pngs/gisa1.webp'

export default function Proyectos() {
    return (
    <>
        <div className="card2">
            <img src={kreta} alt="Imagen Pagina Kreta" className="card-image"/>
            <div className="wraper-card">
                <a href="https://kreta.ar/">https://kreta.ar/</a>
                <h2 className="titulo-card">Kreta</h2>
                <h3 className="subtitulo-card">Landing page para cooperativa</h3>
                <p className="texto-card">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis neque mauris, vitae blandit sem ullamcorper eu. Fusce risus nunc, sodales sed ornare ut, viverra vitae orci. Vestibulum convallis orci ut nunc finibus, eget venenatis nisi ullamcorper. 
                </p>
            </div>
        </div>
        <div className="card1">
            <img src={gisa} alt="Imagen Pagina Gisa" className="card-image"/>
            <div className="wraper-card">
                <a href="https://gisaweb.netlify.app/">https://gisaweb.netlify.app/</a>
                <h2 className="titulo-card">GisaWeb</h2>
                <h3 className="subtitulo-card">Landing page para empresa constructora</h3>
                <p className="texto-card">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis neque mauris, vitae blandit sem ullamcorper eu. Fusce risus nunc, sodales sed ornare ut, viverra vitae orci. Vestibulum convallis orci ut nunc finibus, eget venenatis nisi ullamcorper. 
                </p>
            </div>
        </div>
    </>
    )
}
