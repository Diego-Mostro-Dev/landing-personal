import React from 'react';
import '../assets/css/whatsapp.css';
import whatsappIcon from '../assets/statics/pngs/whatsapp.png';

export default function Whatsapp() {
    return (
        <div className="whatsapp">
            <a href="https://wa.me/34555005500/?text=tu%20texto%20personalizado" target="_blank" rel='noreferrer'>
                <img src={whatsappIcon} alt="WhatsApp" />
            </a>
        </div>
    );
}
