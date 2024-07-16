import React from 'react'
import '../assets/css/gatite.css'
import gatito from '../assets/statics/gifs/giphygato.mp4'

export default function Gatite() {
    return (
        <div className="div1">
            <div>
                <video loop autoPlay muted src={gatito} type='video/mp4'></video>   
            </div> 
        </div>
    )
}
