import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import volver from '../assets/statics/svgs iconos/arrow-left-s-line.svg';
import '../assets/css/formulario-mobile.css'; // Importa el CSS específico para formulario-mobile

export default function Formulario() {
    const form = useRef();
    const [enviadoConExito, setEnviadoConExito] = useState(false);
    const [formData, setFormData] = useState({
        user_email: '',
        from_name: '',
        tipo_proyecto: '',
        message: '',
        to_name: 'Tu Nombre' // Asegúrate de definir esto según tu necesidad
    });

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("Datos del formulario antes de enviar:", formData); // Verificar datos antes de enviar

        emailjs.sendForm('service_3wchj3e', 'template_ry57w68', form.current, 'XRuyq49Q064sTIL4V')
            .then((result) => {
                console.log(result.text);
                setEnviadoConExito(true);
                setFormData({
                    user_email: '',
                    from_name: '',
                    tipo_proyecto: '',
                    message: '',
                    to_name: 'Tu Nombre' // Asegúrate de definir esto según tu necesidad
                });
            }, (error) => {
                console.log(error.text);
                setEnviadoConExito(false);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return (
        <>
            <div className="formulario-mobile"> {/* Asegúrate de usar una clase única para este formulario */}
                <Link to="/">
                    <div className="wraper-detalle-volver">
                        <img src={volver} alt="" className="volver" />
                        <h4>Volver</h4>
                    </div>
                </Link>
                <h1 className="titulo-form-mobile">¿Tenés un proyecto en mente?</h1>
                {enviadoConExito ? (
                    <div className='exito-mobile'>¡Gracias por escribirme!</div>
                ) : (
                    <h2 className="subtitulo-form-mobile">Escribime</h2>
                )}
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                    />
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                    />
                    <label htmlFor="tipo-proyecto">Tipo de proyecto</label>
                    <select
                        name="tipo_proyecto"
                        id="tipo-proyecto"
                        value={formData.tipo_proyecto}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Seleccioná una opción</option>
                        <option value="Landing page">Landing page</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="One page web">One page web</option>
                        <option value="Mantenimiento web">Mantenimiento web</option>
                        <option value="Creacion de una API">Creacion de una API</option>
                        <option value="Gestor de contenido para web">Gestor de contenido para web</option>
                        <option value="Otro">Otro</option>
                    </select>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder='Contame sobre tu proyecto'
                        required
                    ></textarea>
                    <input type="submit" text="Enviar" />
                </form>
            </div>
        </>
    );
}
