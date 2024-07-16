import React from 'react'
import '../assets/css/stack.css'
import javascript from '../assets/statics/svgs logos/javascript.svg'
import django from '../assets/statics/svgs logos/django.svg'
import python from '../assets/statics/svgs logos/python.svg'
import react from '../assets/statics/svgs logos/react.svg'
import css from '../assets/statics/svgs logos/css.svg'
import postgresql from '../assets/statics/svgs logos/postgresql.svg'
import html from '../assets/statics/svgs logos/html5.svg'
import sql from '../assets/statics/svgs logos/sql-server.svg'

export default function Stack() {
    return (
    <>
        <div className="div2">
            <img src={javascript} alt="Logo Javascript" className="stack"/>
            <img src={django} alt="Logo Django" className="stack"/>
            <img src={python} alt="Logo Python" className="stack"/>
            <img src={react} alt="Logo React" className="stack"/>
            <img src={css} alt="Logo CSS" className="stack"/>
            <img src={postgresql} alt="Logo PosgreSQL" className="stack"/>
            <img src={html} alt="Logo HTML" className="stack"/>
            <img src={sql} alt="Logo SQL" className="stack"/>
        </div>
    </>
    )
}
