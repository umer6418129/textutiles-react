import React from 'react'

export default function About(props) {
    const cap =(word)=>{
        const lower = word.toLowerCase();
        return lower.charArt(0).toUpperCase + lower.slice(1);  
    }
    return (
        props.alart && 
        <div className='container mt-5'>
            <div className={`alert alert-${props.mode === 'dark' ?'success' :'dark'} alert-dismissible fade show`} role="alert">
                <strong>{props.alart.type} </strong>  {props.alart.message}
            </div>
        </div>
    )
}
