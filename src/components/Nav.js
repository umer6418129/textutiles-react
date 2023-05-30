import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <nav className={`navbar text-white bg-${props.mode === 'light' && props.greenmode === 'light' ? 'light' : 'dark'} `}>
            <div className="container-fluid d-flex">
                <Link className={`navbar-brand text-${props.mode === 'light' && props.greenmode === 'light' ? 'dark' : 'light'}`} to="/">TextUtiles</Link>
                <Link className={`navbar-brand text-${props.mode === 'light' && props.greenmode === 'light' ? 'dark' : 'light'}`} to="/About">About</Link>
                <div className="form-check form-switch">
                    <input onClick={props.modegreen} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.greenmode === 'light' && props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.greenmode === 'light' ? 'Enable Green Mode' : 'Enable Light Mode'}</label>
                </div>
                <div className="form-check form-switch">
                    <input onClick={()=>{props.toggleMode(null)}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === 'light' && props.greenmode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
                </div>
                {/* <div className='d-flex'>
                <div className='bg-primary rounded mx-2 border-1' style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('primary') }}></div>
                <div className='bg-success rounded mx-2 border-1' style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('success') }}></div>
                <div className='bg-warning rounded mx-2 border-1' style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('warning') }}></div>
                <div className='bg-dark rounded mx-2 border-1' style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('dark') }}></div>
                </div> */}

            </div>
        </nav>
    )
}
