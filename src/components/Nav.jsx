import React from 'react';
import '../assets/css/nav.css';
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };

    const redirectToFormulario = () => {
        navigate("/");
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
            <div className="nav">
                <ul>
                    <li><span onClick={redirectToHome}>Home</span></li>
                    <li><span onClick={redirectToFormulario}>Contacto</span></li>
                </ul>
            </div>
        </>
    );
}
