import React from 'react'
import '../assets/css/home.css'
import Nav from '../components/Nav'
import SobreMi from '../components/SobreMi'
import Gatite from '../components/Gatite'
import Stack from '../components/Stack'
import MisProyectos from '../components/MisProyectos'
import Correo from '../components/Correo'
import Proyectos from '../components/Proyectos'
import Formulario from '../components/Formulario'
import Whatsapp from '../components/Whatsapp'
import MandameMensajes from '../components/MandameMensajes'
import HomeMobile from '../components/HomeMobile'

export default function Home() {
    

    return (
    <>
        <article className="wrap-home">
            <section className="seccion1">
                <Nav></Nav>
                <SobreMi></SobreMi>
            </section>
            <section className="seccion2">
                <Gatite></Gatite>
                <Stack></Stack>
                <MisProyectos></MisProyectos>
                <Correo></Correo>
            </section>
            <section className="seccion3">
                <Proyectos></Proyectos>
            </section>
            <section className="seccion4">
                <Formulario></Formulario>
                <Whatsapp></Whatsapp>
                <MandameMensajes></MandameMensajes>
            </section>
            <section className="mobile">
                <HomeMobile></HomeMobile>
            </section>
        </article>
    </>
)
}
