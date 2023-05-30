//-------State and Handling Events--------------\\

import React, { useState } from 'react'

export default function Second(props) {
    const [text, setText] = useState('Enter the Text')
    const change = (event) => {
        setText(event.target.value)
    }
    const upper = () => {
        let change = text.toLocaleUpperCase();
        setText(change)
        props.showalert('Change into Upper case')
    }
    const lower = () => {
        let change = text.toLocaleLowerCase();
        props.showalert('Change into lower case')
        setText(change)
    }
    const clear = () => {
        let clear = ''
        props.showalert('Clear Successfully')
        setText(clear)
    }
    return (
        <>
            <br />
            <br />
            <div className="form-floating">
                <h1 className={`text-${props.mode ==='light' && props.greenmode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
                <textarea value={text} className="form-control h-100" style={{backgroundColor: props.mode ==='light' && props.greenmode=== 'light' ? 'grey' : 'white', color:props.mode ==='light' && props.greenmode === 'light' ? 'white' : 'black'}} placeholder="Leave a comment here" id="floatingTextarea2" rows='8' onChange={change} ></textarea>
                <div>
                <button disabled={text.length === 0} className={` btn btn-${props.mode ==='light' && props.greenmode === 'light' ? 'dark' : 'success'} my-4 m-3`} onClick={upper}  > Change to uppercase</button>
                <button disabled={text.length === 0} className={` btn btn-${props.mode ==='light' && props.greenmode === 'light' ? 'dark' : 'success'} my-4 m-3`} onClick={lower} > {props.btn}</button>
                <button disabled={text.length === 0} className={` btn btn-${props.mode ==='light' && props.greenmode === 'light' ? 'dark' : 'success'} =my-4 m-3`} onClick={clear} > Clear</button>
                </div>
            </div>

            {/* class: Adding more logic */}

            <div className={`text-${props.mode ==='light' && props.greenmode === 'light' ? 'dark' : 'light'}`}>
                <h1>Here is your Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} is alphabates</p>
                <p>You will be read it with in a {text.split(/\s+/).filter((element)=>{return element.length !==0}).length * 0.008} min</p>
                <h2 className='text-center'>Preview</h2>
                <p className='text-center'>{text.length >0 ? text:` Nothing to Preview!` }</p>
            </div>
        </>
    )
}
