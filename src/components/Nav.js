import React from 'react'
import { Link, a } from 'react-router-dom'

export default function Nav(props) {
    return (
        <nav className={`navbar text-white bg-${props.mode=== 'light' && props.greenmode === 'light' ? 'light' :'dark'} `}>
            <div className="container-fluid d-flex">
                <Link className={`navbar-brand text-${props.mode === 'light' && props.greenmode==='light' ? 'dark' : 'light'}`} to="/">TextUtiles</Link>
                <Link className={`navbar-brand text-${props.mode === 'light' && props.greenmode==='light' ? 'dark' : 'light'}`} to="/About">About</Link>
                <div className="form-check form-switch">
                    <input onClick={props.modegreen} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.greenmode === 'light' && props.mode=== 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.greenmode === 'light' ? 'Enable Green Mode' : 'Enable Light Mode'}</label>
                </div>
                <div className="form-check form-switch">
                    <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === 'light' && props.greenmode=== 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
                </div>
            </div>
        </nav>
    )
}
