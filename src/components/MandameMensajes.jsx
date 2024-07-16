import React from 'react'
import '../assets/css/mandame-mensajes.css'
import escribinos from '../assets/statics/gifs/giphy.mp4'

export default function MandameMensajes() {
    return (
        <div className="escribinos">
            <video loop autoPlay muted src={escribinos} type='video/mp4'></video>   
        </div>
    )
}
