import React from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'
import { useState } from 'react'


export default function Todo(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    };

    function closeModalHandler() {
        setModalIsOpen(false);
    };

    return (
        <div className="card">
            <h1>{props.task}</h1>
            <div className="actions">
               <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen ? <Modal onClick={closeModalHandler} onConfirm={closeModalHandler}/> : null}
            {modalIsOpen ? <Backdrop onClick={closeModalHandler}/> : null}
        </div>
    )
}
