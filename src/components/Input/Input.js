import React from 'react'

import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
    <form className=" m-0">
        <div className="d-flex">
            <div className="mx-2 mt-2 text-warning">
            <i className=
            "fas fa-smile fa-2x"></i>
            </div>
        <input 
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        className="form-control rounded m-1"
        />
        <button onClick={(event) => sendMessage(event)} className="btn btn-sm teal darken-2 text-white px-3"><i className="fas fa-forward fa-2x"></i></button>
        </div>
    </form>
)

export default Input;