import React from 'react'
import '../assets/css/home-mobile.css'
import fotomia from '../assets/statics/jpgs/mostro.webp'
import javascript from '../assets/statics/svgs logos/javascript.svg'
import django from '../assets/statics/svgs logos/django.svg'
import python from '../assets/statics/svgs logos/python.webp'
import react from '../assets/statics/svgs logos/react.svg'
import css from '../assets/statics/svgs logos/css.svg'
import postgresql from '../assets/statics/svgs logos/postgresql.svg'
import html from '../assets/statics/svgs logos/html5.svg'
import sql from '../assets/statics/svgs logos/sql-server.svg'
import whatsappIcon from '../assets/statics/pngs/whatsapp.webp'
import instagram from '../assets/statics/pngs/Instagram.webp'
import correo from '../assets/statics/pngs/exito.webp'
import chatbot from '../assets/statics/pngs/chatbot.webp'
import escribinos from '../assets/statics/gifs/giphy.mp4'
import gatito from '../assets/statics/gifs/giphygato.mp4'
import trabajos from '../assets/statics/gifs/trabajo.mp4'
import { Link } from 'react-router-dom';

export default function HomeMobile() {

    return (
        <>
            <section className="section1-mobile">
                <h1 className="titulo-sobremi-mobile">Programador web</h1>
            </section>
            <section className="section2-mobile">
                <Link to="/sobre-mi-mobile" className="sobre-mi-mobile">
                    <h2 className="sobre-mi-mobile">Sobre mi</h2>
                </Link>
            </section>
            <section className="section3-mobile">
                <Link to="/sobre-mi-mobile">
                    <img src={fotomia} alt="Mi foto" />
                </Link>
            </section>
            <section className="section4-mobile">
                <Link to="/proyectos-mobile">
                    <div className="proyectos-mobile-video">
                        <video loop autoPlay muted src={trabajos} type='video/mp4'></video>
                    </div>
                    <h2 className="titulo-proyectos-mobile">Mirá mis proyectos</h2>
                </Link>
            </section>

            <section className="section5-mobile">
                <img src={javascript} alt="Logo Javascript" className="stack" />
                <img src={django} alt="Logo Django" className="stack" />
                <img src={python} alt="Logo Python" className="stack" />
                <img src={react} alt="Logo React" className="stack" />
                <img src={css} alt="Logo CSS" className="stack" />
                <img src={postgresql} alt="Logo PosgreSQL" className="stack" />
                <img src={html} alt="Logo HTML" className="stack" />
                <img src={sql} alt="Logo SQL" className="stack" />
            </section>
            <section className="section6-mobile">
                <div className="escribinos-mobile">
                    <video loop autoPlay muted src={escribinos} type='video/mp4'></video>
                </div>
            </section>
            <section className="section7-mobile">
                <div className="correo-mobile" title='Escribime'>
                    <a href="mailto:diegosalvadodev@gmail.com" target="_blank" rel='noreferrer' className="correo">
                        <img src={correo} alt="Mandame un correo" />
                    </a>
                </div>
                <div className="whatsapp-mobile" title='Whatsapp'>
                    <a href="https://wa.me/3416164792/?text=Hola,%20como%20estás?" target="_blank" rel='noreferrer'>
                        <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                </div>
                <div className="instagram-mobile" title='Instagram'>
                    <a href="https://www.instagram.com/diegosalvadodev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel='noreferrer'>
                        <img src={instagram} alt="Logo de instagram" />
                    </a>
                </div>
            </section>
            <section className="section8-mobile">
                <Link to="/formulario-mobile">
                    <h2 className="titulo-form-mobile">¿Tenés un proyecto en mente?</h2>
                    <h3 className="subtitulo-form-mobile">Escribime</h3>
                    <img src={chatbot} alt="icono chatbot" />
                </Link>
            </section>
            <section className="section9-mobile">
                <div>
                    <video loop autoPlay muted src={gatito} type='video/mp4'></video>
                </div>
            </section>
        </>
    )
}
