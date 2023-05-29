import React from 'react'

export default function Alart(props) {
    return (
        <div className="alert alert-success" role="alert">
            <h1 style={{color: props.mode === 'dark' && props.greenmode === 'dark' ? 'white' :'black'}}>About</h1>
        </div>
    )
}
